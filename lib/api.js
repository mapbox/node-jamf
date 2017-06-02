var request = require('./request.js');

module.exports.getComputers = getComputers;
module.exports.getComputerById = getComputerById;
module.exports.getAccounts = getAccounts;

function getComputers(config, callback) {
  request.jamfRequest(config, 'GET', 'computers', callback);
}

function getComputerById(config, id, callback) {
  request.jamfRequest(config, 'GET', 'computers/id/' + id, callback);
}

function getAccounts(config, callback) {
  request.jamfRequest(config, 'GET', 'accounts', callback);
}