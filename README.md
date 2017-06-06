# node-jamf

A lightweight Node.js wrapper for Jamf Pro's JSS REST API.

## Scope

Currently this module only supports `GET` requests for the JSS REST API. [Support for other methods such as `PUT`, `POST`, and `DELETE` will be added later](https://github.com/mapbox/node-jamf/issues/6).

[Support for the JSS Universal API](https://github.com/mapbox/node-jamf/issues/5) may also be added later.

## Installation

Add the following line to the `dependencies` section of your `package.json`:

```js
  "node-jamf": "mapbox/node-jamf"
```

Then run `npm install`

## Usage

The following code sets up the module and configures the API client with values from your local environment:

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

## Tests

To run the tests for this project:

```js
npm test
```

The tests use [eslint](http://eslint.org/) for linting and [tape](https://github.com/substack/tape) for tests.

## Feature requests and reporting bugs

Are we missing something in this module? Did you find a bug?

Please look through the [list of issues](https://github.com/mapbox/node-jamf/issues?utf8=%E2%9C%93&q=is%3Aissue) (both open and closed) and see if an issue already exists for what you want to propose or report.

Don't see anything in the issues? Please [create a new one](https://github.com/mapbox/node-jamf/issues/new)!

## Contributing

Contributors are welcome! If you want to contribute, please fork this repo then submit a pull request (PR).

All of your tests should pass both locally and in Travis before we'll accept your PR. We also request that you add additional test coverage and documentation updates in your PR where applicable.

## Resources

* You can see all available Jamf API calls by accessing `/api` on your JSS instance. For example, visit `https://yourdomain.jamfcloud.com/api`. This page also contains an API playground where you can test out requests.
* [The Unofficial Jamf API Docs](https://unofficial-jss-api-docs.atlassian.net/wiki)
