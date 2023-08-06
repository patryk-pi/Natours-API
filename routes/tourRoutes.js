import express from 'express';
import {
  getAllTours,
  addNewTour,
  getOneTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} from './../controllers/tourController.js';

const router = express.Router();

router.param('id', checkID);

router.route('/').get(getAllTours).post(checkBody, addNewTour);

router.route('/:id').get(getOneTour).patch(updateTour).delete(deleteTour);

export default router;
