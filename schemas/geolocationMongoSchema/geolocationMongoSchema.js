const { Schema } = require("mongoose");

const { handleSaveErrors } = require('../../helpers')

const geolocationMongoSchema = new Schema(
  {
    name: {
      type: String,
      ref: 'name',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
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
      ref: 'team',
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