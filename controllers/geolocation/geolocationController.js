
const Joi = require("joi");
const Geolocation = require('../../models/Geolocation');
const geolocationSchema = require('../../schemas/geolocationSchema/geolocationSchema');

const saveLocation = async (req, res) => {
  const { error } = geolocationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { latitude, longitude } = req.body;
  const userId = req.user.id; // Obtain userId from the authenticated user

  try {
    // Save the location data to the database
    await Geolocation.create({
      userId,
      coordinates: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
    });

    res.status(201).json({ message: 'Location data saved successfully' });
  } catch (error) {
    console.error('Error saving location data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = saveLocation;


