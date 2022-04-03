**Credits**

mkcert created by [FiloSottile](https://github.com/FiloSottile/mkcert)

**Usage**

Three-step process for setting up a workspace and template for a new SSL-secured, Heroku-based Express app in Node:

1. Fork this repo
2. Clone the fork to your local machine
3. Run `node initFork.js` to install NPM packages, setup local SSL certs, and clean the .gitignore list

You can of course delete `initFork.js` when you're done setting up, if you want.

For the owner of this repo who cannot fork it:

1. Make a new repo and clone the empty repo to your local machine
2. Add an "upstream" remote pointed to this repo
3. Pull upstream/master into origin/master, then run `node initFork.js`