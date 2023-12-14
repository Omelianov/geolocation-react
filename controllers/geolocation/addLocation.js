const Geolocation = require('../../models/Geolocation');

const addLocation = async ({ body, user: { _id } }, res) => {
  const { latitude, longitude } = body;

  try {
    // Save the location data to the database
    const location = await Geolocation.create({
      userId: _id,
      coordinates: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
    });

    res.status(201).json(location);
  } catch (error) {
    console.error('Error adding location data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = addLocation;