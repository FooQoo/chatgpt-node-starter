import { Response } from 'express';

export const getSuccessResponse = (
  res: Response,
  message: string
): Response => {
  return res.status(200).json({
    status: 'success',
    message,
  });
};

export const getInternalServerError = (res: Response): Response => {
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};

export const getBadRequest = (res: Response): Response => {
  return res.status(400).json({
    status: 'error',
    message: 'Bad Request',
  });
};
