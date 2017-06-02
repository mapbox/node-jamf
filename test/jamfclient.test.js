var tape = require('tape');
var nock = require('nock');

var JamfApiClient = require('../lib/jamfclient.js');

var testConfig = {
  user: 'fakeuser',
  password: 'fakepassword',
  jamfUrl: 'https://abc123.jamfcloud',
  format: 'json'
}

tape('Jamf API client fails if config is not provided', function(assert){
  assert.throws(function() { new JamfApiClient() });
  assert.end();
});

tape('Jamf API client configuration success', function(assert){
  assert.doesNotThrow(function() { new JamfApiClient(testConfig) });
  assert.end();
});