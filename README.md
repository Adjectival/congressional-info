# Legislator-lookup :hocho::us:

A quick and dirty demonstration of API calls to the Sunlight Foundation. App built with EmberCLI.

## Prerequisites
You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)

# Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm i && bower i && ember s`
* Ctrl + C to end the web server

# Activation

* Acquire your own key from the Sunlight Foundation
* Create a file named ".env" in the project directory
* Save this next line in ".env", replacing your Sunlight API
* export apiKey="your-API-key"

## Running / Development
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Restart web server with `ember serve`

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
