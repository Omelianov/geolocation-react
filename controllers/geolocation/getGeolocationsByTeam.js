const getGeolocationsByTeam = async (req, res) => {
  const teamColor = req.params.teamColor;

  try {
    // Use a case-insensitive query for team color
    const geolocations = await Geolocation.find({ team: { $regex: new RegExp(teamColor, 'i') } });
    res.json(geolocations);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getGeolocationsByTeam;
