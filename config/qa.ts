module.exports = {
  "CRON_SCHEDULE": "* * * * * ",
  "SENTRY": {
    "DSN": "https://442790093e7d4f70af6109f35807cced@sentry.io/1767348"
  },
  "CHECKS": [
    {
      "service": "pro-app",
      "url": "https://qa.eyexpo.com/appstatic/signin"
    },
    {
      "service": "pro-api",
      "url": "http://api.services.qa.eyexpo.org:8000/health"
    },
    {
      "service": "pro-auth",
      "url": "http://auth.services.qa.eyexpo.org:3000/health"
    },
    {
      "service": "pro-legacy",
      "url": "http://legacy.services.qa.eyexpo.org"
    },
    {
      "service": "pro-file",
      "url": "http://file.services.qa.eyexpo.org:3001/health"
    },
    {
      "service": "primeape",
      "url": "http://account.services.qa.eyexpo.org:3004/health"
    },
    {
      "service": "porygon",
      "url": "http://porygon.services.qa.eyexpo.org:3003/health"
    },
    {
      "service": "abra",
      "url": "http://abra.services.qa.eyexpo.org:3005/health"
    },
    {
      "service": "elastic search",
      "url": "http://es.services.qa.eyexpo.org:9200"
    },
    {
      "service": "elastic apm",
      "url": "http://apm.services.qa.eyexpo.org:8200"
    },
  ]
}