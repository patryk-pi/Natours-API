import mongoose from 'mongoose';

const toursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rating: Number,
  price: {
    type: Number,
    required: [true, 'A tour has to have a price'],
  },
});

const Tour = mongoose.model('Tour', toursSchema);

export default Tour;
