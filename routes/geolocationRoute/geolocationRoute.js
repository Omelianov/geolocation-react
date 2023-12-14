
const express = require('express');
const router = express.Router();
const geolocationController = require('../../controllers/geolocation/geolocationController');
const validateBody = require('../../middleware/validateBody');
const authentication = require('../../middleware/authenticate');
const { geolocationSchema } = require('../../models/Geolocation'); // Import the geolocationSchema

// Geolocation route to handle saving location data
router.post(
  '/',
  authentication, // Ensure the user is authenticated
  validateBody(geolocationSchema), // Validate the request body using geolocationSchema
  geolocationController.saveLocation
);

module.exports = router;
