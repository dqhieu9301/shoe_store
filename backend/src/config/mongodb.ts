import mongoose  from 'mongoose';
import dotenv  from 'dotenv';

dotenv.config();
mongoose
  .connect(process.env.URL_MONGO as string)
  .then(() => {
    console.log("MongoDb is connecting");
  })
  .catch((e) => {
    console.log("MongoDb is not connecting" + e);
  });