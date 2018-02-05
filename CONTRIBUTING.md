# Contributing
By participating in this project, you agree to abide by the project's [code of conduct](CODE_OF_CONDUCT.md).

Your help and efforts for improving this project are much appreciated!

## Setup
Start by forking and then cloning the repo locally:
```bash
$ git clone --recursive git@github.com:stanchino/react-serverless-auth.git
$ cd react-serverless-auth
```

Then install the project dependencies:
```bash
$ yarn install
or
$ npm install
```

## Lint
The project is setup to use [ESLint](https://eslint.org/). The configuration is based on the 
[eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) package shipped with 
[create-react-app](https://github.com/facebook/create-react-app).

Code linting can be executed manually: 
```bash
$ yarn eslint
or
$ npm run eslint
```
or dynamically when the code changes:
```bash
$ yarn eslint:watch
or
$ npm run eslint:watch
```

## Test
The test framework used by the project is [Jest](https://facebook.github.io/jest/) and tests are being executed using 
[react-scripts](https://github.com/facebook/create-react-app/tree/next/packages/react-scripts) for simplicity. The test 
coverage threshold is set to **100%** and **ALL** tests **MUST** pass.

The tests can be executed manually:
```bash
$ yarn test
or
$ npm test
```
or dynamically when the code changes:
```bash
$ yarn test:watch
or
$ npm run test:watch
```

## Build
The project is built with [Babel](https://babeljs.io/) using the [.babelrc](.babelrc) configuration and the package
files are added to the [dist](dist) directory. Once the files are generated you can use 
[npm-link](https://docs.npmjs.com/cli/link) to include it in other projects locally.

The build process can be executed manually:
```bash
$ yarn build
or
$ npm run build
```
or dynamically when the code changes:
```bash
$ yarn build:watch
or
$ npm run build:watch
```

## Code Quality
The project uses [CodeClimate](https://codeclimate.com/) for code quality control. Refer to the 
[Code Climate CLI](https://github.com/codeclimate/codeclimate) repository for installing the command line tool.

Analyze your code using the Code Climate CLI:
```bash
$ codeclimate analyze src
``` 

## Example Application
There is an [example application](https://github.com/stanchino/react-serverless-auth-example) available for testing 
the package changes locally. It is added to the repository as a git submodule in the [example](example) directory.

### Configuration
The [react-serverless-auth](https://www.npmjs.com/package/react-serverless-auth) package requires two configuration 
values from your AWS Account in order to access your Cognito User Pool:

* The User Pool Id, e.g. `us-east-1_iwLVITRKW`
* A User Pool App Client Id, e.g. `1hj3pe92ms19sfjvh6424ek4me`

**IMPORTANT:** When creating the App, the generate client secret box must be **unchecked** because the JavaScript SDK 
doesn't support apps that have a client secret.

You can use the [AWS Console for Cognito User Pools](https://console.aws.amazon.com/cognito/users/) to get or create 
these values.

In order to use Cognito Federated Identity to provide access to your AWS resources or Cognito Sync you will 
also need the Id of a Cognito Identity Pool that will accept login requests from the above Cognito User Pool and App.

The project configuration is based on environment variables as described in the
[create-react-app documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables).

The following variables are supported:
```dotenv
REACT_APP_COGNITO_USER_POOL_ID=us-east-1_iwLVITRKW
REACT_APP_COGNITO_CLIENT_ID=1hj3pe92ms19sfjvh6424ek4me
REACT_APP_AUTH_LOGIN_URL=/auth/login
REACT_APP_AUTH_CONFIRM_URL=/auth/confirm
REACT_APP_AUTH_REGISTER_URL=/auth/register
REACT_APP_AUTH_RESET_URL=/auth/reset
```

### Installation
To run the example application you need to link the project package first:
```bash
$ yarn build && yarn link && cd example && yarn link react-serverless-auth && cd ../
or
$ npm link && cd example && npm link react-serverless-auth ../ && cd ../
```

This will install the requirements for the project package and will build it. After the package is linked 
successfully you can start the example application and test it in your browser:
```bash
$ yarn example
or
$ npm run example
```

There is also a script that runs all the watch tasks (ESLint, Tests and Build) and starts the example application:
```bash
$ yarn dev
or
$ npm run dev
```

## Submitting Code
After development is finished make sure everything is properly tested and works in the example application. 

As described in the [Deployment](#deployment) section the project is released by
[semantic-release](https://semantic-release.gitbooks.io/semantic-release/content/#highlights) which is configured 
to use the [ESLint Convention](https://www.npmjs.com/package/conventional-changelog-eslint) preset for commit messages. 

Be sure to follow the commit message conventions.

Commit message summaries must follow this basic format for [GitHub issues]():

```
Tag: Message Issue
```

`Tag` should not be confused with git tag.
`Message` should not be confused with git commit message.

The `Tag` is one of the following:

* `Fix` - for a bug fix.
* `Update` - for a backwards-compatible enhancement.
* `Breaking` - for a backwards-incompatible enhancement.
* `Docs` - changes to documentation only.
* `Build` - changes to build process only.
* `New` - implemented a new feature.
* `Upgrade` - for a dependency upgrade.

The message summary should be a one-sentence description of the change. 

The issue reference should be mentioned at the end:

* For [GitHub issues](https://github.com/stanchino/react-serverless-auth/issues) the issue reference should be 
formatted as `((fixes|refs) #ISSUE_NUMBER)` * The commit message should say "(fixes #1234)" at the end of the description 
if it closes out an existing issue (replace 1234 with the issue number). If the commit doesn't completely fix the 
issue, then use `(refs #1234)` instead of `(fixes #1234)`.
* For [Pivotal tasks](https://www.pivotaltracker.com/n/projects/2147977) the issue reference should be formatted as 
`[(Finishes|Fixes|Delivers) #PIVOTAL_TRACKER_STORY_ID]`. Use `Finishes` and `Fixes` to automatically put the Pivotal 
task in `Finished` state and `Delivers` to put it in `Delivered` state when the pull request is merged. 

Once you have committed your code push the changes to your fork and create a 
[pull request](https://github.com/stanchino/react-serverless-auth/compare)

## Deployment
The project uses [semantic-release](https://semantic-release.gitbooks.io/semantic-release/content/#highlights) for
automating the release flow. Only the master branch is allowed to be released and the release is delegated to
[TravisCI](https://travis-ci.org/stanchino/react-serverless-auth) as configured in [.travis.yml](.travis.yml).

It is possible to release the local master branch to [NPM](https://www.npmjs.com/package/react-serverless-auth):
```bash
$ npx semantic-release
```