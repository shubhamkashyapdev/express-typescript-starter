import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

const connectDB = async () => {
  const dbUri = config.get('dbUri');
  try {
    const connection = await mongoose.connect(`${dbUri}`);
    logger.info(`mongoDB connected: ${connection.connection.host}`);
  } catch (err) {
    logger.info('Counld not connect to DB');
    process.exit(1);
  }
};

export default connectDB;
