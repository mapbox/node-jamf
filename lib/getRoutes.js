var request = require('./request.js');

// module.exports.getComputers = getComputers;
// module.exports.getAccounts = getAccounts;

// function getComputers(options, callback) {
//   request.jamfRequest(options, 'GET', 'computers', callback);
// }

// function getAccounts(options, callback) {
//   request.jamfRequest(options, 'GET', 'accounts', callback);
// }

// var routes = {
//   'computers': {
//     'method': 'GET',
//     'resource': 'computers'
//   },
//   'accounts': {
//     'method': 'GET',
//     'resource': 'accounts'
//   }
// }

var routes = [
  {'method': 'GET', 'resource': 'computers'},
  {'method': 'GET', 'resource': 'accounts'}
];

routes.forEach(function (route){
  
  // var myFunction = function dynamicFunction() {
  //   request.jamfRequest(options, route.method, route.resource);
  // }

  var myObject = {
    
  }


  var functionBody = 'request.jamfRequest(options, route.method, route.resource);';

  var myFunction = new Function('options', 'callback', functionBody);

  myFunction.name = 'Hello function name';

  console.log(myFunction.name);

});