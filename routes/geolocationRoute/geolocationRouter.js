
const express = require('express');
const geolocationCtrl = require('../../controllers/geolocation');
const authentication = require('../../middleware/authenticate');

const router = express.Router();

// Route to save geolocation data
router.post('/save', authentication, geolocationCtrl.saveGeolocation);

// GET all /getTeamsNamesList
router.get('/teamsnames', authentication, geolocationCtrl.getTeamsNamesList);

// Route to get the latest geolocation data by userId
router.get('/getlatest', authentication, geolocationCtrl.getLatestGeolocationByUserId);

// GET all geolocations (no authentication required for this route)
router.get('/all', geolocationCtrl.getAllGeolocations);

// // GET all geolocations by authenticated user
// router.get('/allauth', authentication, geolocationCtrl.getAllGeolocations);

// GET all name team /geolocations/teams/
router.get('/teams', authentication, geolocationCtrl.getTeams);

// GET geolocations filtered by specific team color /geolocations/teams/color
router.get('/teams/:teamColor', authentication, geolocationCtrl.getGeolocationsByTeam);

// DELETE /geolocations/teams/:id
router.delete('/teams/:id', authentication, geolocationCtrl.deleteGeolocationByUserId);

module.exports = router;
