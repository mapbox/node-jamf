var tape = require('tape');
var nock = require('nock');

var JamfApiClient = require('../lib/jamfclient.js');

var computerFixtures = require('./fixtures/computers.js');
var allComputers = computerFixtures.allComputers();
var xmlAllComputers = computerFixtures.xmlAllComputers();

var jsonConfig = {
  user: 'fakeuser',
  password: 'fakepassword',
  jamfUrl: 'https://abc123.jamfcloud.com',
  format: 'json'
}

var xmlConfig = {
  user: 'fakeuser',
  password: 'fakepassword',
  jamfUrl: 'https://abc123.jamfcloud.com',
  format: 'xml'
}

tape('Jamf API client fails if config is not provided', function(assert){
  assert.throws(function() { new JamfApiClient() });
  assert.end();
});

tape('Jamf API client configuration success', function(assert){
  assert.doesNotThrow(function() { new JamfApiClient(jsonConfig) });
  assert.end();
});

tape('Jamf API request to get computers in JSON format', function(assert){

  nock('https://abc123.jamfcloud.com')
    .get('/JSSResource/computers')
    .reply('200', allComputers);

  var jamf = new JamfApiClient(jsonConfig);

  jamf.get('/computers', function (err, res){
    assert.ifErr(err, 'Function does not error');
    assert.deepEqual(res, allComputers, 'Function returns a list of all computers in JSON');
  });

  assert.end();

});

tape('Jamf API request to get computers in XML format', function(assert){

  nock('https://abc123.jamfcloud.com')
    .get('/JSSResource/computers')
    .reply('200', xmlAllComputers);

  var jamf = new JamfApiClient(xmlConfig);

  jamf.get('/computers', function (err, res){
    assert.ifErr(err, 'Function does not error');
    assert.deepEqual(res, xmlAllComputers, 'Function returns a list of all computers in XML');
  });

  assert.end();

});