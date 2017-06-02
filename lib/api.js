var request = require('./request.js');

module.exports.getComputers = getComputers;
module.exports.getComputerById = getComputerById;
module.exports.getAccounts = getAccounts;
module.exports.getOsXConfigurationProfiles = getOsXConfigurationProfiles;
module.exports.getOsXConfigurationProfilesById = getOsXConfigurationProfilesById;
module.exports.getOsXConfigurationProfilesByIdAndSubset = getOsXConfigurationProfilesByIdAndSubset;

function getComputers(config, callback) {
  request.jamfRequest(config, 'GET', 'computers', callback);
}

function getComputerById(config, options, callback) {
  request.jamfRequest(config, 'GET', 'computers/id/' + options.id, callback);
}

function getAccounts(config, callback) {
  request.jamfRequest(config, 'GET', 'accounts', callback);
}

function getOsXConfigurationProfiles(config, callback) {
  request.jamfRequest(config, 'GET', 'osxconfigurationprofiles', callback);
}

function getOsXConfigurationProfilesById(config, options, callback) {
  request.jamfRequest(config, 'GET', 'osxconfigurationprofiles/id/' + options.id, callback);
}

function getOsXConfigurationProfilesByIdAndSubset(config, options, callback) {
  request.jamfRequest(config, 'GET', 'osxconfigurationprofiles/id/' + options.id + '/subset/' + options.subset, callback);
}