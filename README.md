# node-jamf

A lightweight Node.js wrapper for the Jamf API.

## Installation

Add the following line to the `dependencies` section of your `package.json`:

```js
  "node-jamf": "mapbox/node-jamf"
```

Then run `npm install`

## Usage

The following code sets up the module and configures the API client with values from

```js
var JamfApiClient = require('node-jamf');

var config = {
  user: process.env.JAMF_API_USER,
  password: process.env.JAMF_API_PASSWORD,
  jamfUrl: process.env.JAMF_URL,
  format: 'json'
}

var jamf = new JamfApiClient(config);

jamf.get('/accounts', function (err, res){
  if (err) console.log(err)
  console.log(res)
});
```

Each Jamf API client method requires a path (e.g. `/accounts`) and a callback (`function(err, res)`) function.

For example, if you wanted to get the General and Location subsets of information about a computer with an id of 50:

```js
jamf.get('/computers/id/50/subset/General&Location', function (err, res){
  if (err) console.log(err)
  console.log(res)
});
```

### Examples

You can find more examples in the `examples` directory of this project.

### Configuration

You need to configure the Jamf API client before it can make any API calls. You'll need the following for configuration:

* `user`: username for the JSS user accessing the Jamf API
* `password`: password for the above account
* `jamfUrl`: the URL of your JSS instance, whether on premise or in the cloud (`https://yourdomain.jamfcloud.com`)
* `format`: the format of the returned data, must be either `xml` (Jamf API default) or `json`

We recommend you create a new dedicated, least privilege API user for these scripts. The user must have the necessary privileges (create, read, update, or delete) on the JSS objects

Here's an example configuration for obtaining XML data:

```js
var config = {
  user: 'readonlyapiuser',
  password: 'fakepassword',
  jamfUrl: 'https://fakefakefakefake.jamfcloud.com',
  format: 'xml'
}

var jamf = new JamfApiClient(config);
```

## Resources

* You can see all available Jamf API calls by accessing `/api` on your JSS instance. For example, visit `https://yourdomain.jamfcloud.com/api`. This page also contains an API playground where you can test out requests.
* [The Unofficial Jamf API Docs](https://unofficial-jss-api-docs.atlassian.net/wiki)
