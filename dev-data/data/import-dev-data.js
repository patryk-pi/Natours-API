import dotenv from 'dotenv';
import mongoose from 'mongoose';
import fs from 'fs';
import Tour from './../../models/tourModel.js';

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(DB).then(() => {
  console.log('DB CON SUCCESS in SCRIPT!');
});

// READ JSON FILE

const tours = JSON.parse(
  fs.readFileSync('dev-data/data/tours-simple.json', 'utf-8'),
);

// IMPORT DATA INTO DATABASE

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data succesfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM COLLECTION

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data succesfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
