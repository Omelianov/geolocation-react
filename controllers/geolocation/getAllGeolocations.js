const Geolocation = require('../../models/geolocations');

const getAllGeolocations = async (req, res) => {
  try {
    const geolocations = await Geolocation.find();
    res.json(geolocations);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getAllGeolocations;