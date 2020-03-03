import HealthChecker from '../HealthChecker';
import IHealthCheckerConfig from '../typings/IHealthCheckerConfig';
import IHealthCheck from 'typings/IHealthChecker';

/**
 * This class is a factory used to generate a health checker instance
 */
export default class HealthCheckerFactory {
  /**
   * Create the health checker for the given configuration
   *
   * @param config The health check configuration
   * @returns An instance of the state machine 
   */
  static create(config: IHealthCheckerConfig): IHealthCheck {
    return new HealthChecker(config);
  }
}
