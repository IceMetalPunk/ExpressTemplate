**Credits**

mkcert created by [FiloSottile](https://github.com/FiloSottile/mkcert)

**Usage**

Three-step process for setting up a workspace and template for a new SSL-secured, Heroku-based Express app in Node:

1. Fork this repo
2. Clone the fork to your local machine
3. Run `node initFork.js` to install NPM packages, setup local SSL certs, and clean the .gitignore list

You can of course delete `initFork.js` when you're done setting up, if you want. It uses the environment variable NODE_ENV as "development" or "production" to switch internal servers, with the default assumption that .env will set that to "development" but your Heroku environment will have it set to "production".

For the owner of this repo who cannot fork it:

1. Make a new repo and clone the empty repo to your local machine
2. Add an "upstream" remote pointed to this repo
3. Pull upstream/master into origin/master, then run `node initFork.js`

**Motivation**

Heroku will automatically handle SSL requests for apps deployed to it, and will proxy them to and from the app over standard HTTP, with a header to specify the original request's protocol. There's a standard approach to checking that header and forcing a redirect to the secure URL if the request came over HTTP.

In a similar vein, testing during development on localhost usually is fine, but for certain things (such as secure cookies), you can't fully test a secure site over HTTP, even on localhost.

So I created this repo as a fork-able template that contains everything needed for the skeleton of an Express app which will force SSL on Heroku *and* allow localhost testing of SSL features. I'll be using this for all my future Express/Heroku projects, and I've made it public so you can, too.