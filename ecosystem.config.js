module.exports = {
  apps: [
    {
      name: 'dps.eckf.pw',
      port: 3000,
      script: './node_modules/nuxt/bin/nuxt.js',
      args      : "start",
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
