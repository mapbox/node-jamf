var request = require('request');

module.exports.jamfRequest = jamfRequest;

function jamfRequest(config, method, resource, callback) {

  var requestOptions = {
    'method': method,
    'auth': {
      'user': config.user,
      'pass': config.password,
      'sendImmediately': false
    }
  }

  if (config.json === true) {
    requestOptions.headers = {
      'Accept': 'application/json'
    }
  }

  var requestUrl = config.jamfUrl + '/JSSResource/' + resource;

  request(requestUrl, requestOptions, function(error, response, body){
    if (error) callback(error, null);
    callback(null, body);
  });

}