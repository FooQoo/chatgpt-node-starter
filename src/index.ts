import bodyParser from 'body-parser';
import express, { Application } from 'express';

import { chatHandler } from './handler/chatHandler';
import { loadEnv } from './lib/dotenv/loadEnv';
import { logger } from './lib/log4js/logger';

const PORT = process.env.PORT || 3000;

loadEnv();

// Create a new Express application.
const app: Application = express();

const basePath = '/api';

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// cron routes
app.post(`${basePath}/chat`, chatHandler);

if (process.env.NODE_ENV == 'development') {
  // Create a server and listen to it.
  app.listen(PORT, () => {
    logger.info(`Application is live and listening on port ${PORT}`);
  });
}

module.exports = app;
