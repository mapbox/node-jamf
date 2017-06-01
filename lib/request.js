var request = require('request');

module.exports.jamfRequest = jamfRequest;

function jamfRequest(options, method, resource) {

  var requestOptions = {
    'method': method,
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

  var requestUrl = options.jamfUrl + '/JSSResource/' + resource;

  request(requestUrl, requestOptions, function(error, response, body){
    if (error) console.log(error);
    console.log(body);
  });

}