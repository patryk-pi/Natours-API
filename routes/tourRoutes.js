import express from 'express';
import {
  getAllTours,
  addNewTour,
  getOneTour,
  updateTour,
  deleteTour,
} from './../controllers/tourController.js';

const router = express.Router();

// router.param('id', checkID);

router.route('/').get(getAllTours).post(addNewTour);

router.route('/:id').get(getOneTour).patch(updateTour).delete(deleteTour);

export default router;
