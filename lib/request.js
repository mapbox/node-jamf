var request = require('request');

module.exports.jamfRequest = jamfRequest;

function jamfRequest(options, method, resource, callback) {

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
    if (error) callback(error, null);
    callback(null, body);
  });

}