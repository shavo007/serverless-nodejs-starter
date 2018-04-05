# serverless-nodejs-starter

[![CircleCI](https://circleci.com/gh/shavo007/serverless-nodejs-starter.svg?style=svg&circle-token=095ba73cea98fe5fb113431fee10d9350639145d)](https://circleci.com/gh/shavo007/serverless-nodejs-starter)

[![Coverage Status](https://coveralls.io/repos/github/shavo007/serverless-nodejs-starter/badge.svg?branch=master)](https://coveralls.io/github/shavo007/serverless-nodejs-starter?branch=master)

A Node.js starter for the Serverless Framework with webpack, custom domain and unit test support

Once installed, you can create and deploy functions with the latest ES6 features in minutes, with linting and formatting baked in.

[Serverless Node.js Starter](https://github.com/shavo007/serverless-nodejs-starter) uses the [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) plugin, [Babel](https://babeljs.io), and [Mocha](https://mochajs.org/). It supports:

- **ES7 syntax in your handler functions**
  - Use async/await
  - And much more!
- **Run API Gateway locally**
  - Use `serverless offline start`
- **Support for unit tests**
  - Run `yarn test` to run your tests
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Automatic support for multiple handler files**
  - No need to add a new entry to your `webpack.config.js`
- **Add environment variables for your stages**

## Install

```bash
# If you don't already have the serverless cli installed, do that
yarn global add serverless

# Use the serverless cli to install this repo
serverless install --url https://github.com/shavo007/serverless-nodejs-starter

# cd into project and set it up
cd serverless-nodejs-starter

# The bootstrap command renames the project folder and project in package.json and serverless.yml
# and initializes a git repo
yarn bootstrap your-project-name

# Install dependencies
yarn install
```

## Development

Creating and deploying a new function takes two steps, which you can see in action with this repo's default Hello World function (if you're already familiar with Serverless, you're probably familiar with these steps).

#### 1. Add your function to `serverless.yml`

In the functions section of [`./serverless.yml`](./serverless.yml), you have to add your new function like so:

```yaml
functions:
  hello:
    handler: src/hello.default
    events:
          - http:
              path: hello
              method: get
              cors: true
```

we're setting up a function named `hello` with a handler at `src/hello.js` (the `.default` piece is just indicating that the function to run will be the default export from that file). The `http` event says that this function will run when an http event is triggered (on AWS, this happens via API Gateway).

#### 2. Create your function

This starter kit's Hello World function (which you will of course get rid of) can be found at [`./src/hello.js`](./src/hello.js). There you can see a basic function that's intended to work in conjunction with API Gateway (i.e., it is web-accessible). Like most Serverless functions, the `hello` function accepts an event, context, and callback. When your function is completed, you execute the callback with your response. (This is all basic Serverless; if you've never used it, be sure to read through [their docs](https://serverless.com/framework/docs/).


### API Gateway-like local dev server

To spin up a local dev server that will more closely match the API Gateway endpoint/experience:

```bash
yarn serve
```

### Adding new functions/files to Webpack

When you add a new function to your serverless config, you don't need to also add it as a new entry
for Webpack. The `serverless-webpack` plugin allows us to follow a simple convention in our `serverless.yml`
file which is uses to automatically resolve your function handlers to the appropriate file:


```yaml
functions:
  hello:
    handler: src/hello.default
```

As you can see, the path to the file with the function has to explicitly say where the handler
file is. (If your function weren't the default export of that file, you'd do something like:
`src/hello.namedExport` instead.)

## Deploy

Assuming you've already set up your default AWS credentials

`yarn deploy:dev` will deploy to "dev" environment. You can deploy to `stage` or `production`
with:

```bash
yarn deploy:stage

# -- or --

yarn deploy:production
```

After you've deployed, the output of the deploy script will give you the API endpoint
for your deployed function(s), so you should be able to test the deployed API via that URL.
