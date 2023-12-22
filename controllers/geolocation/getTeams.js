const Geolocation = require('../../models/geolocations');

const getTeams = async (req, res, next) => {
  try {
    const geolocations = await Geolocation.find().sort({ team: 1 }); // Sort by the "team" field in ascending order
    res.json(geolocations);
  } catch (error) {
    next(error);
  }
};

module.exports = getTeams;