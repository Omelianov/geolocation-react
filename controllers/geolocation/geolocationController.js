const Geolocation = require('../../models/geolocations');

// Controller to save geolocation data
const saveGeolocation = async ({ body, user: { _id } }, res) => {
  try {
    console.log('_id:', _id);

    if (!_id) {
      throw new Error('User ID is null');
    }

    const { coordinates } = body;

    console.log('coordinates:', coordinates);

    // Convert _id to string
    const ownerId = _id.toString();

    // Create or update a user's geolocation record
    const geolocation = await Geolocation.findOneAndUpdate(
      { owner: ownerId },
      { coordinates },
      { upsert: true, new: true }
    );

    res.status(201).json(geolocation);
  } catch (error) {
    console.error('Error in saveGeolocation:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};

// Controller to get the latest geolocation data by userId
const getLatestGeolocationByUserId = async (req, res) => {
  const owner = req.user._id.toString(); // Extract owner id from logged-in user data

  try {
    // Find the latest geolocation record for the user
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

module.exports = {
  saveGeolocation,
  getLatestGeolocationByUserId,
};