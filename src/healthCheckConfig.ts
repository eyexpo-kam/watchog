import * as config from 'config';
import IHealthCheckerConfig from 'typings/IHealthCheckerConfig';

const healthCheckConfig: IHealthCheckerConfig = {
  checks: config.get('CHECKS')
};

export default healthCheckConfig;