import dotenv from 'dotenv';
import app from './app.js';
import mongoose from 'mongoose';

process.on('uncaughtException', (err) => {
  console.log('Unhandled rejection! Shutting down...');
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(DB).then(() => {
  console.log('DB CON SUC!');
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//TEST

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
