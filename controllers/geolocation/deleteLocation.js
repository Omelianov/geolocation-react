
const Geolocation = require('../../models/Geolocation');
const { requestError } = require("../../helpers");

const deleteLocation = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id; // Obtain userId from the authenticated user

  try {
    // Check if the geolocation data exists for the specified user
    const location = await Geolocation.findOneAndRemove({ _id: id, userId });

    if (!location) {
      throw requestError(404, "Location not found");
    }

    res.json({
      message: "Location deleted successfully",
    });
  } catch (error) {
    console.error('Error deleting location data:', error);
    res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
};

module.exports = deleteLocation;
