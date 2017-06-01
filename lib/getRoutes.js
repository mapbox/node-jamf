var request = require('./request.js');

module.exports.getComputers = getComputers;
module.exports.getAccounts = getAccounts;

function getComputers(options) {
  request.jamfRequest(options, 'GET', 'computers');
}

function getAccounts(options) {
  request.jamfRequest(options, 'GET', 'accounts');
}