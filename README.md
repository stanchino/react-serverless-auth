# React Authentication Components using AWS Cognito

[![Build Status](https://travis-ci.org/stanchino/react-serverless-auth.svg?branch=development)](https://travis-ci.org/stanchino/react-serverless-auth)
[![Coverage Status](https://coveralls.io/repos/github/stanchino/react-serverless-auth/badge.svg?branch=development)](https://coveralls.io/github/stanchino/react-serverless-auth?branch=development)
[![dependencies Status](https://david-dm.org/stanchino/react-serverless-auth/status.svg)](https://david-dm.org/stanchino/react-serverless-auth)
[![npm version](https://badge.fury.io/js/react-serverless-auth.svg)](https://badge.fury.io/js/react-serverless-auth)
[![Maintainability](https://api.codeclimate.com/v1/badges/8c4fb3714386dfe74a57/maintainability)](https://codeclimate.com/github/stanchino/react-serverless-auth/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8c4fb3714386dfe74a57/test_coverage)](https://codeclimate.com/github/stanchino/react-serverless-auth/test_coverage)

[![Try react-serverless-auth on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/stanchino/react-serverless-auth-example/)

## Installation
```bash
$ yarn add react-serverless-auth
or
$ npm install --save react-serverless-auth
```

## Configuration
To simplify the integration with [create-react-app](https://github.com/facebook/create-react-app) the package uses 
environment variables as described in the create-react-app 
[documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables).
The environment variables are handled using [dotenv](https://www.npmjs.com/package/dotenv) by default.

### Amazon Cognito User Pool
To use the [react-serverless-auth](https://www.npmjs.com/package/react-serverless-auth) components you need to create an
[Amazon Cognito User Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/setting-up-cognito-user-identity-pools.html)
from the [AWS Console for Cognito User Pools](https://console.aws.amazon.com/cognito/users/) or using the 
[create-user-pool](http://docs.aws.amazon.com/cli/latest/reference/cognito-idp/create-user-pool.html) command in the 
AWS CLI.

**IMPORTANT:** When [creating the App](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html), 
the generate client secret box must be **unchecked** because the JavaScript SDK 
[doesn't support](https://docs.aws.amazon.com/cognito/latest/developerguide/tutorial-integrating-user-pools-javascript.html) 
apps that have a client secret.

The User Pool ID and Client ID are specified in the following environment variables:
```dotenv
REACT_APP_COGNITO_USER_POOL_ID
REACT_APP_COGNITO_CLIENT_ID
```

### Authentication URLs
The authentication endpoint URLs are configurable and the following default values are pre-defined in
[src/routes.js](src/routes.js):
```dotenv
REACT_APP_AUTH_LOGIN_URL=/auth/login
REACT_APP_AUTH_CONFIRM_URL=/auth/confirm
REACT_APP_AUTH_REGISTER_URL=/auth/register
REACT_APP_AUTH_RESET_URL=/auth/reset
```

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md).

## Technology Stack
* [AWS SDK for JavaScript](https://aws.amazon.com/sdk-for-node-js/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux-Saga](https://redux-saga.js.org/)
* [Redux-Form](https://redux-form.com/7.2.3/)

## Dependencies
* [amazon-cognito-identity-js](https://github.com/aws/amazon-cognito-identity-js/)
* [reduce-reducers](https://github.com/acdlite/reduce-reducers)
* [redux-form-validators](https://github.com/gtournie/redux-form-validators)
* [redux-saga-routines](https://github.com/afitiskin/redux-saga-routines)
