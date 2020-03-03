module.exports = {
  "SENTRY": {
    "DSN": "https://442790093e7d4f70af6109f35807cced@sentry.io/1767348"
  },
  "ELASTICSEARCH": {
    "URL": "http://es.services.devlocal.eyexpo.org:9200",
    "APP_LOG_INDEX": "apm-app-logs"
  },
  "APM_SERVER": {
    "SERVICE_NAME": "watchog",
    "URL": "http://apm.services.devlocal.eyexpo.org:8200",
    "CAPTURE_STACK_TRACES": true 
  },
  "CHECKS": [
    {
      "service": "pro-app",
      "url": "https://devlocal.eyexpo.com/appstatic/signin"
    },
    {
       "service": "pro-api",
       "url": "http://api.services.devlocal.eyexpo.org:8000/health"
    },
    {
       "service": "pro-auth",
       "url": "http://auth.services.devlocal.eyexpo.org:3000/health"
    },
    {
       "service": "pro-legacy",
       "url": "http://legacy.services.devlocal.eyexpo.org"
    },
    {
      "service": "pro-file",
      "url": "http://file.services.devlocal.eyexpo.org:3001/health"
    },
    {
      "service": "primeape",
      "url": "http://account.services.devlocal.eyexpo.org:3004/health"
    },
    {
      "service": "porygon",
      "url": "http://porygon.services.devlocal.eyexpo.org:3003/health"
    },
    {
      "service": "abra",
      "url": "http://abra.services.devlocal.eyexpo.org:3005/health"
    },
    {
      "service": "Elastic",
      "url": "http://es.services.devlocal.eyexpo.org:9200"
    },
    {
      "service": "APM",
      "url": "http://apm.services.devlocal.eyexpo.org:8200"
    },
  ]
}