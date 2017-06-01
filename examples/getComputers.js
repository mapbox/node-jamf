var getRoutes = require('../lib/getRoutes.js');

var options = {
  user: process.env.JAMF_API_USER,
  password: process.env.JAMF_API_PASSWORD,
  jamfUrl: process.env.JAMF_URL,
  json: true
}

getRoutes.getComputers(options, function (err, response){
  if (err) console.log(err);
  console.log(response);
});