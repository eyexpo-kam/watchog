import IStatus from "../typings/IStatus";
import IHealthCheck from "typings/IHealthChecker";
import IHealthCheckerConfig from "typings/IHealthCheckerConfig";
import axios, { AxiosResponse } from 'axios';
import { Agent } from 'https';
import * as Sentry from '@sentry/node';

/**
 * This class implements the health checker.
 */
export default class HealthChecker implements IHealthCheck {
  /**
   * Health checker configuration
   */
  private config: IHealthCheckerConfig;

  /**
   * Constructor for health checker 
   *
   * @param config Health checker configuration
   */
  constructor(config: IHealthCheckerConfig) {
    this.config = config;
  }

  /**
   * Perform all checks
   *
   * @returns An array of statuses
   */
  public async performChecks(): Promise<IStatus[]> {
    const statusResponses: IStatus[] = [];
    for (let check of this.config.checks) {
      try {
        const httpsAgent = new Agent({ rejectUnauthorized: false });
        const response = await axios.get(`${check.url}`, { httpsAgent });
        if (response.status !== 200) {
          const body = await this.getResponseBody(response);
          const errMsg = `Health Check failed for service: ${check.service}, url: ${check.url}, status: ${response.status} body: ${body}`;
          this.generateError(new Error(errMsg))
        }
        statusResponses.push({
          service: check.service,
          status: response.status
        });
      } catch (error) {
        this.generateError(error);
      }
    }

    return statusResponses;
  }

  private generateError(err: Error) {
    const msgObj = {
      message: err.message,
      user: require("os").userInfo().username
    }
    Sentry.setTag('message', msgObj.message.slice(0, 99));
    Sentry.setTag('service.name', 'watchot');
    Sentry.setTag('user', msgObj.user);
    Sentry.captureException(err);
  }

  private async getResponseBody(response: AxiosResponse<any>) {
    const contentType = response.headers ? response.headers["content-type"]: '';
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return JSON.stringify(response.data);
    } else {
      return response.data;
    }
  }
}
