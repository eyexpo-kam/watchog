/**
 * Interface for a given state's configuration 
 */
export interface IServiceHealthCheckConfig {
  name: string; // service name
  endpoint: string; // service endpoint 
}

/**
 * Interface for configurations of health checks 
 */
export interface IServiceHealthCheckConfigs {
  [key: string]: IServiceHealthCheckConfig ; // Configurations for states
}

/**
 * Interface for service health checks 
 */
export interface IServiceHealthChecks {
  service: string;
  method: string;
  url: string;
}

/**
 * Interface for the health check configuration
 */
export default interface IHealthCheckerConfig {
  checks: IServiceHealthChecks[];
}
