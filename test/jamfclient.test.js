var tape = require('tape');
var nock = require('nock');

var JamfApiClient = require('../lib/jamfclient.js');

var allComputers = require('./fixtures/computers.js').allComputers();

var testConfig = {
  user: 'fakeuser',
  password: 'fakepassword',
  jamfUrl: 'https://abc123.jamfcloud.com',
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

tape('Jamf API requests to get computers', function(assert){

  nock('https://abc123.jamfcloud.com')
    .get('/JSSResource/computers')
    .reply('200', allComputers);

  var jamf = new JamfApiClient(testConfig);

  jamf.get('/computers', function (err, res){
    assert.ifErr(err, 'Function does not error');
    assert.deepEqual(res, allComputers, 'Function returns a list of all computers');
  });

  assert.end();

});