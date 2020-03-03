import IStatus from "./IStatus";

/**
 * Interface for the health checker 
 */
export default interface IHealthCheck {
  performChecks(): Promise<IStatus[]>;
}

