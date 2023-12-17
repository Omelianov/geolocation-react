const { Schema } = require("mongoose");

const geolocationMongoSchema = new Schema(
  {
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
  },
  { versionKey: false, timestamps: true }
);

module.exports = geolocationMongoSchema;