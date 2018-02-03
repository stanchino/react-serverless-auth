# Contributing
By participating in this project, you agree to abide by the project's [code of conduct](CODE_OF_CONDUCT.md).

Your help and efforts for improving this project are much appreciated!

## Setup
Start by forking and then cloning the repo locally:
```bash
$ git clone git@github.com:stanchino/react-serverless-auth.git
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
the package changes locally. To use it within the project's code base add it as a git submodule:
```bash
$ git add git@github.com:stanchino/react-serverless-auth-example.git example
```

When the example application submodule is added you need to link the project:
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
After the development is finished make sure everything is properly tested and works in the example application. 

As described in the [Deployment](#deployment) section the project is released by
[semantic-release](https://semantic-release.gitbooks.io/semantic-release/content/#highlights) which is configured 
to use the [ESLint Convention](https://www.npmjs.com/package/conventional-changelog-eslint) preset for commit messages. 

Be sure to follow the commit message conventions.

Commit message summaries must follow this basic format:

```
Tag: Message (fixes #1234)
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

The message summary should be a one-sentence description of the change. The issue number should be mentioned at the 
end. * The commit message should say "(fixes #1234)" at the end of the description if it closes out an existing issue 
(replace 1234 with the issue number). If the commit doesn't completely fix the issue, then use `(refs #1234)` instead 
of `(fixes #1234)`.

Once you have committed your code push the changes to your fork and create a 
[pull request](https://github.com/stanchino/react-serverless-auth/compare). 

## Deployment
The project uses [semantic-release](https://semantic-release.gitbooks.io/semantic-release/content/#highlights) for
automating the release flow. Only the master branch is allowed to be released and the release is delegated to
[TravisCI](https://travis-ci.org/stanchino/react-serverless-auth) as configured in [.travis.yml](.travis.yml).

It is possible to release the local master branch to [NPM](https://www.npmjs.com/package/react-serverless-auth):
```bash
$ npx semantic-release
```