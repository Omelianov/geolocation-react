const Geolocation = require('../../models/geolocations');

const getLatestGeolocationByUserId = async (req, res) => {
  const owner = req.user._id.toString();

  try {
    const geolocation = await Geolocation.findOne({ owner }).sort({ createdAt: -1 }).limit(1);

    if (!geolocation) {
      res.status(404).json({ error: 'No geolocation data found for the user' });
      return;
    }

    res.status(200).json(geolocation);
  } catch (error) {
    console.error('Error in getLatestGeolocationByUserId:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};

module.exports = getLatestGeolocationByUserId;
