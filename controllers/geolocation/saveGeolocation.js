const Geolocation = require('../../models/geolocations');

const saveGeolocation = async ({ body, user: { _id, name: userName } }, res) => {
  try {
    if (!_id) {
      throw new Error('User ID is null');
    }
    const { coordinates } = body;

    let geolocation = await Geolocation.findOne({ owner: _id });

    if (!geolocation) {
      geolocation = await Geolocation.create({ owner: _id, name: userName, coordinates, ...body });
    } else {
      geolocation.coordinates = coordinates;

      // Set the name only if it's available in the user object
      if (userName) {
        geolocation.name = userName;
      }

      await geolocation.save();
    }

    res.status(200).json(geolocation);
  } catch (error) {
    console.error('Error in saveGeolocation:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};

module.exports = saveGeolocation;