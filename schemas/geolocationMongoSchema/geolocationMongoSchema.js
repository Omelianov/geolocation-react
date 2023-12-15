const { Schema } = require("mongoose");

const geolocationMongoSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
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

geolocationMongoSchema.index({ userId: 1 }, { unique: true });

module.exports = geolocationMongoSchema;