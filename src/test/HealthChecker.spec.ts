import HealthCheckerFactory from "../HealthCheckerFactory";
// import { TelemetryService } from 'eyexpo-core/lib/opentracing/telemetry';
// import { getTelemetryConfig } from '../telemetry/telemetry-options';
// TelemetryService.init(getTelemetryConfig());
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Service Checker", () => {
  beforeEach(()=> {
    jest.resetAllMocks();
  })
  describe("Given a health configuration", () => {
    describe("When performing a health check that receives successful check", () => {
      it("Then the status should be 200", async () => {
        const config = {
          checks: [
            {
              service: 'file',
              method: 'GET',
              url: 'http://file.services.devlocal.eyexpo.org:3001/health'
            },
            {
              service: 'porygon',
              method: 'GET',
              url: 'http://porygon.services.devlocal.eyexpo.org:3003/health'
            },
          ]
        };
        mockedAxios.get.mockResolvedValue({ status: 200 });
        const healthChecker = HealthCheckerFactory.create(config);
        const healthCheckResult = await healthChecker.performChecks();
        expect(healthCheckResult.length).toBe(2);
        expect(healthCheckResult[0].service).toBe(config.checks[0].service)
        expect(healthCheckResult[0].status).toBe(200);
        expect(healthCheckResult[1].service).toBe(config.checks[1].service)
        expect(healthCheckResult[1].status).toBe(200);
        expect(mockedAxios.get).toHaveBeenCalledTimes(2);
      });
    });
    describe("When performing a health check that receives a failed check", () => {
      it("Then the status should not be 200 for that check", async () => {
        const config = {
          checks: [
            {
              service: 'pro-file',
              method: 'GET',
              url: 'http://file.services.devlocal.eyexpo.org:3001/health'
            },
            {
              service: 'porygon',
              method: 'GET',
              url: 'http://porygon.services.devlocal.eyexpo.org:3003/health'
            },
            {
              service: 'api',
              method: 'GET',
              url: 'http://api.services.devlocal.eyexpo.org:3000/health'
            },
            {
              service: 'auth',
              method: 'GET',
              url: 'http://auth.services.devlocal.eyexpo.org:3000/health'
            },
          ]
        };
        mockedAxios.get.mockResolvedValueOnce({ status: 200, headers: {'content-type': 'text'} });
        mockedAxios.get.mockResolvedValueOnce({ status: 500,  headers: {'content-type': 'application/json'} });
        mockedAxios.get.mockResolvedValueOnce({ status: 500,  headers: undefined });
        mockedAxios.get.mockResolvedValueOnce({ status: 401,  headers: {'content-type': undefined } });
        const healthChecker = HealthCheckerFactory.create(config);
        const healthCheckResult = await healthChecker.performChecks();
        expect(healthCheckResult.length).toBe(4);
        expect(healthCheckResult[0].service).toBe(config.checks[0].service)
        expect(healthCheckResult[0].status).toBe(200);
        expect(healthCheckResult[1].service).toBe(config.checks[1].service)
        expect(healthCheckResult[1].status).toBe(500);
        expect(healthCheckResult[2].service).toBe(config.checks[2].service)
        expect(healthCheckResult[2].status).toBe(500);
        expect(healthCheckResult[3].service).toBe(config.checks[3].service)
        expect(healthCheckResult[3].status).toBe(401);
        expect(mockedAxios.get).toHaveBeenCalledTimes(4);
      });
    });
    describe("When performing a health check that throws an error", () => {
      it("Then status info for all other checks that succeeded should be returned", async () => {
        const config = {
          checks: [
            {
              service: 'file.services',
              method: 'GET',
              url: 'http://file.services.devlocal.eyexpo.org:3001/health'
            },
            {
              service: 'porygon',
              method: 'GET',
              url: 'http://porygon.services.devlocal.eyexpo.org:3003/health'
            },
          ]
        };
        mockedAxios.get.mockResolvedValueOnce({ status: 200 });
        mockedAxios.get.mockRejectedValueOnce(new Error('some error'));
        const healthChecker = HealthCheckerFactory.create(config);
        const healthCheckResult = await healthChecker.performChecks();
        expect(healthCheckResult.length).toBe(1);
        expect(healthCheckResult[0].service).toBe(config.checks[0].service)
        expect(healthCheckResult[0].status).toBe(200);
        expect(mockedAxios.get).toHaveBeenCalledTimes(2);
      });
    });
  });
});