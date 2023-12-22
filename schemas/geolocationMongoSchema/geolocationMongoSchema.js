const mongoose = require("mongoose");
const { Schema } = mongoose;
const handleSaveErrors = require('../../helpers/handleSaveErrors')

const geolocationMongoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,

    },
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      default: [0, 0],
    },
    position: {
      type: String,
      enum: ['start tracking', 'stop tracking'],
      default: 'stop tracking',
    },
    team: {
      type: String,
      enum: [
        'Red',
        'Green',
        'Blue',
        'Brown',
        'Black',
        'Orange',
        'Violet',
      ],
    },
  },
  { versionKey: false, timestamps: true }
);


geolocationMongoSchema.post('save', handleSaveErrors);

module.exports = geolocationMongoSchema;