import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import connectDB from './config/db';
import morgan from 'morgan';
console.log('working');

const app = express();

// TODO: add mongo uri in .env and uncomment the line below
// connectDB();

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
app.get('/', (req, res) => {
  res.send('working');
});

// Server Setup
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT} in ${NODE_ENV}`);
});
