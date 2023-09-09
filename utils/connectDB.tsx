import mongoose from 'mongoose';

async function connectDB() {
  // check to see if we already are connected or not
  if (mongoose.connections[0].readyState) return;
  // if we are not
  // active strict query
  mongoose.set('strictQuery', false);
  // then connect to data base with saved url from .env file
  await mongoose.connect(`${process.env.MONGO_API}`);
  console.log('Connected to DB');
}

export default connectDB;
