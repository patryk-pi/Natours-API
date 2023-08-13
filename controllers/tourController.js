import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Tour from '../models/tourModel.js';

// NEEDED to be done for __dirname to work!
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
// );

// export const checkID = (req, res, next, value) => {
//   const id = parseInt(req.params.id);

//   if (id > tours.length) {
//     return res.status(404).json({
//       status: 'failed',
//       message: 'Invalid ID',
//     });
//   }
//   next();
// };

export const checkBody = (req, res, next) => {
  const { name, price } = req.body;
  console.log(name, price);

  if (!name || !price) {
    return res.status(400).json({
      status: 'failed',
      message: 'Missing properties',
    });
  }

  next();
};

export const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    // result: tours.length,
    // data: {
    //   tours,
    // },
  });
};

export const getOneTour = (req, res) => {
  // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

export const addNewTour = (req, res) => {
  // console.log(req.body);
  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         tour: newTour,
  //       },
  //     });
  //   },
  // );
};

export const updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'TO BE UPDATED',
    },
  });
};

export const deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
