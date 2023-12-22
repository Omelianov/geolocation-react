
const mongoose = require("mongoose");
const geolocationSchema = require("../schemas/geolocationMongoSchema/geolocationMongoSchema");

const Geolocation = mongoose.model("Geolocation", geolocationSchema);

module.exports = Geolocation;
