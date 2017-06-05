var request = require('request');
var _ = require('lodash');

function JamfApiClient(config) {
  this.config = {
    user: config.user,
    password: config.password,
    jamfUrl: config.jamfUrl,
    format: config.format
  }
}

var successCodes = [200, 201];

JamfApiClient.prototype = {
  get: function(path, callback) {

    var requestUrl = this.config.jamfUrl + '/JSSResource' + path;
    var dataFormat = this.config.format;

    var requestOptions = {
      'method': 'GET',
      'auth': {
        'user': this.config.user,
        'pass': this.config.password,
        'sendImmediately': false
      }
    }

    if (dataFormat === 'json') {
      requestOptions.headers = {
        'Accept': 'application/json'
      }
    }

    request(requestUrl, requestOptions, function(error, response, body){
      if (!_.includes(successCodes, response.statusCode)) {
        var error = new Error(response.statusCode + ' ' + response.statusMessage);
      }
      if (error) {
        callback(error, null);
      } else {
        // don't JSON parse if the format is XML
        if (dataFormat === 'json') {
          callback(null, JSON.parse(body));
        } else {
          callback(null, body);
        }
      }
    });
  }
}

module.exports = JamfApiClient;