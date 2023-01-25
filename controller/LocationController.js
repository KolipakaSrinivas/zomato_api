const LocationsModel = require("../Model/LocationModel");






module.exports.welcome = (request, response) => {
  response.send("Welcome to api");
};





module.exports.getLocationList = async (request, response) => {
  let result = await LocationsModel.find();
  response.send({
    status: true,
    location: result,
  });
};

