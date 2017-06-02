var request = require('request');

function JamfApiClient(config) {
  this.config = {
    user: config.user,
    password: config.password,
    jamfUrl: config.jamfUrl,
    format: config.format
  }
}

JamfApiClient.prototype = {
  get: function(path, callback) {
    var requestUrl = this.config.jamfUrl + '/JSSResource' + path;

    var requestOptions = {
      'method': 'GET',
      'auth': {
        'user': this.config.user,
        'pass': this.config.password,
        'sendImmediately': false
      }
    }

    if (this.config.format === 'json') {
      requestOptions.headers = {
        'Accept': 'application/json'
      }
    }

    request(requestUrl, requestOptions, function(error, response, body){
     if (error) callback(error, null);
     callback(null, JSON.parse(body));
    });
  }
}

module.exports = JamfApiClient;