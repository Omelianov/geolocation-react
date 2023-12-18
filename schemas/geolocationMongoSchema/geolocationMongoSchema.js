const mongoose = require("mongoose");
const { Schema } = mongoose;

const geolocationMongoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      // unique: true,
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

// Export the model with a dynamic collection name
module.exports = (ownerId) =>
  mongoose.model(`Geolocation_${ownerId}`, geolocationMongoSchema);
