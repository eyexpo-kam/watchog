module.exports = {
  "CRON_SCHEDULE": "* * * * * ",
  "SENTRY": {
    "DSN": "https://442790093e7d4f70af6109f35807cced@sentry.io/1767348"
  },
  "CHECKS": [
    {
      "service": "pro-app",
      "url": "https://staging.eyexpo.com/appstatic/signin"
    },
    {
      "service": "pro-api",
      "url": "http://api.services.staging.eyexpo.org:8000/health"
    },
    {
      "service": "pro-auth",
      "url": "http://auth.services.staging.eyexpo.org:3000/health"
    },
    {
      "service": "pro-legacy",
      "url": "http://legacy.services.staging.eyexpo.org"
    },
    {
      "service": "pro-file",
      "url": "http://file.services.staging.eyexpo.org:3001/health"
    },
    {
      "service": "primeape",
      "url": "http://account.services.staging.eyexpo.org:3004/health"
    },
    {
      "service": "porygon",
      "url": "http://porygon.services.staging.eyexpo.org:3003/health"
    },
    {
      "service": "abra",
      "url": "http://abra.services.staging.eyexpo.org:3005/health"
    },
    {
      "service": "elastic search",
      "url": "http://es.services.staging.eyexpo.org:9200"
    },
    {
      "service": "elastic apm",
      "url": "http://apm.services.staging.eyexpo.org:8200"
    },
  ]
}