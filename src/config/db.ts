import mongoose from 'mongoose';

interface options {
  useUnifiedTopology: boolean;
  useCreateIndex: boolean;
  useNewUrlParser: boolean;
  useFindAndModify: boolean;
}

const connectDB = async () => {
  const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
  console.log(`mongoDB connected: ${connection.connection.host}`);
};

export default connectDB;
