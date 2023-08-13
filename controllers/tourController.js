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

// export const checkBody = (req, res, next) => {
//   const { name, price } = req.body;
//   console.log(name, price);

//   if (!name || !price) {
//     return res.status(400).json({
//       status: 'failed',
//       message: 'Missing properties',
//     });
//   }

//   next();
// };

export const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      data: {
        tours,
      },
      // result: tours.length,
      // data: {
      //   tours,
      // },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

export const getOneTour = async (req, res) => {
  try {
    const oneTour = await Tour.findById(req.params.id);

    // ANOTHER WAY
    // const oneTour = await Tour.findOne({_id: req.params.id})

    res.status(200).json({
      status: 'success',
      data: {
        oneTour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
  // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

export const addNewTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }

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

export const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

export const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};
