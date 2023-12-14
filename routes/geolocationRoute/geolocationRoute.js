
const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/geolocation');
const validateBody = require('../../middleware/validateBody');
const authentication = require('../../middleware/authenticate');
const { geolocationSchema } = require('../../schemas/geolocationSchema/geolocationSchema'); // Import the geolocationSchema
const ctrlWrapper = require('../../helpers/ctrlWrapper');

const addLocation = require('../../controllers/geolocation'); // Import the addLocation function
const deleteLocation = require('../../controllers/geolocation')

// Geolocation route to handle saving location data
router.post(
  '/',
  authentication, // Ensure the user is authenticated
  validateBody(geolocationSchema), // Validate the request body using geolocationSchema
  ctrlWrapper(ctrl.addLocation) // Use the addLocation function
);

// Geolocation route to handle deleting location data
router.delete(
  '/:id',
  authentication,
  ctrlWrapper(ctrl.deleteLocation)
);



module.exports = router;
