var JamfApiClient = require('node-jamf');

var config = {
  user: process.env.JAMF_API_USER,
  password: process.env.JAMF_API_PASSWORD,
  jamfUrl: process.env.JAMF_URL,
  format: 'json'
}

var jamf = new JamfApiClient(config);

jamf.get('/accounts', function (err, res){
  if (err) console.log(err)
  console.log(res)
});

jamf.get('/computers/id/32', function (err, res){
  if (err) console.log(err)
  console.log(res)
});

jamf.get('/osxconfigurationprofiles/id/3/subset/Scopes', function (err, res){
  if (err) console.log(err)
  console.log(res)
});