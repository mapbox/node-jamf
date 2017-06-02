var tape = require('tape');
var nock = require('nock');

var JamfApiClient = require('../lib/jamfclient.js');

tape('Jamf client fails if config is not provided', function(assert){
  assert.throws(function() { new JamfApiClient() });
  assert.end();
});