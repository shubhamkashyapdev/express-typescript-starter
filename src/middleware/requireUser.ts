import { Request, Response, NextFunction } from 'express';

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = req?.locals?.user;
  if (!user) {
    res.sendStatus(403);
  }
  return next();
};

export default requireUser;
