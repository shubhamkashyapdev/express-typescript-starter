import { Application, Request, Response } from 'express';
import { createUserSessionHandler } from '../controllers/session.controller';
import { createUserHandler } from '../controllers/user.controller';
import validate from '../middleware/validateResource';
import { createSessionSchema } from '../schema/session.shema';
import { createUserSchema } from '../schema/user.schema';

function routes(app: Application) {
  app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: `Api is running...`,
    });
  });

  app.post('/api/users', validate(createUserSchema), createUserHandler);

  app.post(
    '/api/sessions',
    validate(createSessionSchema),
    createUserSessionHandler,
  );
}

export default routes;
