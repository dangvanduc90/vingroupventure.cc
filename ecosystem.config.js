module.exports = {
  apps: [
      {
          name: 'vingroupventure',
          script: 'npm',
          args: 'start',
          env_production: {
              NODE_ENV: 'production',
          },
      },
  ],
};
