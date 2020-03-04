module.exports = {
  apps: [
    {
      name: 'watchog',
      script: 'build/server.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_dev: {
        NODE_ENV: 'dev'
      },
      env_qa: {
        NODE_ENV: 'qa'
      },
      env_staging: {
        NODE_ENV: 'staging'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
