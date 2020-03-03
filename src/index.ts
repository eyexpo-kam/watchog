import IStatus from "./typings/IStatus";
import IHealthCheck from 'typings/IHealthChecker';
import HealthCheckerFactory from "./HealthCheckerFactory";
import healthCheckConfig from './healthCheckConfig';
import * as config from 'config';
import * as Sentry from '@sentry/node';

const healthCheck: IHealthCheck = HealthCheckerFactory.create(healthCheckConfig);

Sentry.init({
  dsn: config.get('SENTRY.DSN')
});

try {

  healthCheck.performChecks().then((result: IStatus[]) => {
    console.log(result);
    // Sentry capture exception is asynchronous so  give it some time to generate alerts
    // before exiting otherwise it won't generate the alerts at all
    setTimeout(() => {
      process.exit();
    }, 10000)
  });
} catch (err) {
  console.log(err)
}
