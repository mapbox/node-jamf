var request = require('request');

module.exports.getComputers = getComputers;

function getComputers(options) {

  var requestOptions = {
    'auth': {
      'user': options.user,
      'pass': options.password,
      'sendImmediately': false
    }
  }

  if (options.json === true) {
    requestOptions.headers = {
      'Accept': 'application/json'
    }
  }

  var jamfUrl = options.jamfUrl;

  request(jamfUrl + '/JSSResource/computers', requestOptions, function(error, response, body){
    if (error) console.log(error);
    console.log(body);
  });

}