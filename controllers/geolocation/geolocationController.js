
const Geolocation = require('../../models/geolocations');

// Controller to save geolocation data
const saveGeolocation = async (req, res) => {
  console.log('Save Geolocation Request Received');
  console.log(req.user);
  const { userId } = req.user; // Extract userId from logged-in user data
  const { coordinates } = req.body;

  try {
    // Find or create a user's geolocation record
    const geolocation = await Geolocation.findOneAndUpdate(
      { userId },
      { coordinates },
      { upsert: true, new: true }
    );

    res.status(201).json(geolocation);
  } catch (error) {
    console.error('Error in saveGeolocation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get the latest geolocation data by userId
const getLatestGeolocationByUserId = async (req, res) => {
  console.log('Get Latest Geolocation Request Received');
  const userId = req.user.id; // Extract userId from logged-in user data

  try {
    // Find the latest geolocation record for the user
    const geolocation = await Geolocation.findOne({ userId }).sort({ createdAt: -1 }).limit(1);

    if (!geolocation) {
      res.status(404).json({ error: 'No geolocation data found for the user' });
      return;
    }

    res.status(200).json(geolocation);
  } catch (error) {
    console.error('Error in getLatestGeolocationByUserId:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  saveGeolocation,
  getLatestGeolocationByUserId,
};


