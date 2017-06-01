var request = require('./request.js');

module.exports.getComputers = getComputers;
module.exports.getAccounts = getAccounts;

function getComputers(config, callback) {
  request.jamfRequest(config, 'GET', 'computers', callback);
}

function getAccounts(config, callback) {
  request.jamfRequest(config, 'GET', 'accounts', callback);
}