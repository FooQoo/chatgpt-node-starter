import dotenv from 'dotenv';

import { logger } from '../log4js/logger';

export const loadEnv = (): void => {
  if (process.env.NODE_ENV == 'development') {
    dotenv.config();

    logger.info('Loading .env file (if exists) ...');
  }
};
