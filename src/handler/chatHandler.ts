import { Request, Response } from 'express';

import { sendMessage } from '../lib/chatgpt/chatgpt';
import { logger } from '../lib/log4js/logger';
import {
  getBadRequest,
  getInternalServerError,
  getSuccessResponse,
} from './helper/responseHelper';

export const chatHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req?.body?.message) {
    return getBadRequest(res);
  }

  try {
    const reply = await sendMessage(req.body.message);

    return getSuccessResponse(res, reply);
  } catch (error) {
    return getInternalServerError(res);
  }
};
