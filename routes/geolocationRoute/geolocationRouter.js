
const express = require('express');
const geolocationCtrl = require('../../controllers/geolocation');
const authentication = require('../../middleware/authenticate');

const router = express.Router();

// Route to save geolocation data
router.post('/save', authentication, geolocationCtrl.saveGeolocation);

// Route to get the latest geolocation data by userId
router.get('/getLatest', authentication, geolocationCtrl.getLatestGeolocationByUserId);

module.exports = router;
