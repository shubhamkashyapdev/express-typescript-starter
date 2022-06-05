import { Application, Request, Response } from 'express';
import { createUserHandler } from '../controllers/user.controller';
import validate from '../middleware/validateResource';
import { createUserSchema } from '../schema/user.schema';

function routes(app: Application) {
  app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: `Api is running...`,
    });
  });

  app.post('/api/users', validate(createUserSchema), createUserHandler);
}

export default routes;
