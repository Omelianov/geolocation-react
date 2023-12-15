
const mongoose = require("mongoose");
const geolocationMongoSchema = require("../schemas/geolocationMongoSchema/geolocationMongoSchema");

const Geolocation = mongoose.model("Geolocation", geolocationMongoSchema);

module.exports = Geolocation;
