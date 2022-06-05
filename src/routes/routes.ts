import { Application, Request, Response } from 'express';
// Middlewares
import validate from '../middleware/validateResource';

// Controllers
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler,
} from '../controllers/session.controller';
import { createUserHandler } from '../controllers/user.controller';
// Schemas
import { createSessionSchema } from '../schema/session.shema';
import { createUserSchema } from '../schema/user.schema';
import requireUser from '../middleware/requireUser';

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

  app.get('/api/sessions', requireUser, getUserSessionsHandler);

  app.delete('/api/sessions', requireUser, deleteSessionHandler);
}

export default routes;
