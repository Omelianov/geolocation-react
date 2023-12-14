
const mongoose = require('mongoose');

const geolocationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const Geolocation = mongoose.model('Geolocation', geolocationSchema);

module.exports = { Geolocation, geolocationSchema };
