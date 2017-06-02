var jamfApi = require('../lib/api.js');

var config = {
  user: process.env.JAMF_API_USER,
  password: process.env.JAMF_API_PASSWORD,
  jamfUrl: process.env.JAMF_URL,
  json: true
}

jamfApi.getComputers(config, function (err, response){
  if (err) console.log(err);
  console.log(response);
});

jamfApi.getComputerById(config, {id: 32}, function (err, response){
  if (err) console.log(err);
  console.log(response);
});