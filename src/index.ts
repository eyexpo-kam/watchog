import IStatus from "./typings/IStatus";
import IHealthCheck from 'typings/IHealthChecker';
import HealthCheckerFactory from "./HealthCheckerFactory";
import healthCheckConfig from './healthCheckConfig';
import * as config from 'config';
import * as Sentry from '@sentry/node';
import * as cron from 'node-cron';

const healthCheck: IHealthCheck = HealthCheckerFactory.create(healthCheckConfig);

Sentry.init({
  dsn: config.get('SENTRY.DSN')
});

cron.schedule(config.get('CRON_SCHEDULE'), () => {
  try {
    console.log('Performing health check');
    healthCheck.performChecks().then((result: IStatus[]) => {
      console.log('Health check result: ', result);
    });
  } catch (err) {
    console.log(err)
  }
});
