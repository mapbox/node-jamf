var getComputers = require('../lib/getComputers.js');

var options = {
  user: process.env.JAMF_API_USER,
  password: process.env.JAMF_API_PASSWORD,
  jamfUrl: process.env.JAMF_URL,
  json: true
}

getComputers.getComputers(options);