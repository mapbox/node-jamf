var jamfApi = require('../lib/api.js');

var options = {
  user: process.env.JAMF_API_USER,
  password: process.env.JAMF_API_PASSWORD,
  jamfUrl: process.env.JAMF_URL,
  json: true
}

jamfApi.getComputers(options, function (err, response){
  if (err) console.log(err);
  console.log(response);
});