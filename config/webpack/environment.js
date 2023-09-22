const { environment } = require('@rails/webpacker')

environment.config.merge({
  entry: {
    application: './app/javascript/application.js', // Example entry point
    // Add more entry points if needed
  },
});

module.exports = environment;
