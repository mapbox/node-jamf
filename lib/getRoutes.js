var request = require('./request.js');

module.exports.getComputers = getComputers;
module.exports.getAccounts = getAccounts;

function getComputers(options, callback) {
  request.jamfRequest(options, 'GET', 'computers', callback);
}

function getAccounts(options, callback) {
  request.jamfRequest(options, 'GET', 'accounts', callback);
}