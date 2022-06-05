import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import connectDB from './utils/connect';
import morgan from 'morgan';
console.log('working');
import config from 'config';
import logger from './utils/logger';

console.log('port', config.get<number>('port'));

const app: Application = express();

// TODO: add mongo uri in .env and uncomment the line below

// configure env variables
dotenv.config();
// Routes Imports

// Middleware configuration
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(express.static('public'));

// Routes Configuration
app.get('/', (req: Request, res: Response) => {
  res.send('working');
});

// Server Setup
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
app.listen(PORT, () => {
  logger.info(`App is started listening on PORT: ${PORT} in ${NODE_ENV} mode`);
  connectDB();
});
