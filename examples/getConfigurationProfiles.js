var jamfApi = require('../lib/api.js');

var config = {
  user: process.env.JAMF_API_USER,
  password: process.env.JAMF_API_PASSWORD,
  jamfUrl: process.env.JAMF_URL,
  json: true
}

jamfApi.getOsXConfigurationProfiles(config, function (err, response){
  if (err) console.log(err);
  console.log(response);
});

jamfApi.getOsXConfigurationProfilesById(config, {id: 3}, function (err, response){
  if (err) console.log(err);
  console.log(response);
});

var options = {
  id: 3,
  subset: 'Scope'
}

jamfApi.getOsXConfigurationProfilesByIdAndSubset(config, options, function (err, response){
  if (err) console.log(err);
  console.log(response);
});