const bunyan = require("bunyan");

const logger = bunyan.createLogger({
  name: "server-logger",
  streams: [
    {
      level: "info",
      stream: process.stdout,
    },
    {
      level: "error",
      stream: process.stdout,
    },
  ],
});

module.exports = logger;
