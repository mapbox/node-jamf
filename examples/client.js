var JamfApiClient = require('jamf');

var config = {
    user: process.env.JAMF_API_USER,
    password: process.env.JAMF_API_PASSWORD,
    jamfUrl: process.env.JAMF_URL,
    format: 'json'
}

var jamf = new JamfApiClient(config);

// Get a list of all JSS accounts
jamf.get('/accounts', function(err, res){
    if (err) console.log(err)
    console.log(res)
});

// Get information on computer #32
jamf.get('/computers/id/32', function(err, res){
    if (err) console.log(err)
    console.log(res)
});

// Get the the Scopes subset of information about OS X Configuration Profile #3
jamf.get('/osxconfigurationprofiles/id/3/subset/Scopes', function(err, res){
    if (err) console.log(err)
    console.log(res)
});