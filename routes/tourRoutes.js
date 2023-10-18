import express from 'express';
import {
  getAllTours,
  addNewTour,
  getOneTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} from './../controllers/tourController.js';

const router = express.Router();

// router.param('id', checkID);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route('/').get(getAllTours).post(addNewTour);

router.route('/:id').get(getOneTour).patch(updateTour).delete(deleteTour);

export default router;
