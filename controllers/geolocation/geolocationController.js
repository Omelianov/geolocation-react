
const Geolocation = require('../../models/Geolocation');

const saveLocation = async (req, res) => {
  const { userId, latitude, longitude } = req.body;

  try {
    // Save the location data to the database
    await Geolocation.create({
      userId,
      coordinates: {
        type: 'Point',
        coordinates: [longitude, latitude],
        // coordinates: [parseFloat(longitude), parseFloat(latitude)],
      },
    });

    res.status(201).json({ message: 'Location data saved successfully' });
  } catch (error) {
    console.error('Error saving location data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  saveLocation,
};

