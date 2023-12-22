const Geolocation = require('../../models/geolocations');

const deleteGeolocationByUserId = async (req, res) => {
  try {
    const { id } = req.params;

    console.log('Deleting geolocation with ID:', id);

    // Use findByIdAndRemove to find and remove the user by ID
    const deletedGeolocation = await Geolocation.findByIdAndRemove(id);

    if (!deletedGeolocation) {
      // If the geolocation is not found, respond with a 404 status
      res.status(404).json({ message: 'Geolocation not found' });
      return;
    }

    console.log('Geolocation deleted:', deletedGeolocation);

    // Respond with a success message
    res.json({
      message: 'Geolocation deleted successfully',
    });
  } catch (error) {
    // Handle errors and respond with an appropriate status and message
    console.error('Error in deleteGeolocationByUserId:', error);

    // Check if the error is a CastError (invalid ID format)
    if (error.name === 'CastError') {
      res.status(400).json({ error: 'Invalid geolocation ID format' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = deleteGeolocationByUserId;


