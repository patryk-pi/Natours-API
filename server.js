import dotenv from 'dotenv';
import app from './app.js';
import mongoose from 'mongoose';

dotenv.config({ path: './config.env' });

console.log(process.env);

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log(con.connections);
  });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
