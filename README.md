# 🐲 Maximum Solidity Environment 🐲
![GitHub package.json version](https://img.shields.io/github/package-json/v/Luiserebii/Maximum-Solidity-Environment?color=g)
![GitHub](https://img.shields.io/github/license/Luiserebii/Maximum-Solidity-Environment?color=g)
[![CircleCI](https://circleci.com/gh/Luiserebii/Maximum-Solidity-Environment/tree/master.svg?style=svg)](https://circleci.com/gh/Luiserebii/Maximum-Solidity-Environment/tree/master)
[![codecov](https://codecov.io/gh/Luiserebii/Maximum-Solidity-Environment/branch/master/graph/badge.svg)](https://codecov.io/gh/Luiserebii/Maximum-Solidity-Environment)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Luiserebii/Maximum-Solidity-Environment.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Luiserebii/Maximum-Solidity-Environment/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Luiserebii/Maximum-Solidity-Environment.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Luiserebii/Maximum-Solidity-Environment/alerts/)

The ultimate environment for Solidity development. TypeScript smart contract testing, code coverage tools, linting, and more included! Simply setup, and get to writing code quickly, with all the tools you need for a fully integrated project at your disposal.

Why does this exist? After setting up a few different repositories with similar configurations, I realized how much effort I'd be spending setting up all of these tools over again. Initially, the barrier was creating a set up where TypeScript could be used to test contracts. 
Eventually, as I started piling up tools for code coverage, linting, and all of the configuration files needed, from TypeScript's compiler to both ESLint and solhint, it became clear that getting this all in a consistent setup which can be easily replicated would be the best course of action to save time in future setups. 

This is supposed to ease the following integration barriers:
  * TypeScript for Solidity smart contract testing
  * Linting of contracts and TypeScript test files
  * Smooth testing which compiles test files and uses the compiled JavaScript to run in one command
  * CI/CD cloud tools for further strengthening the development lifecycle



Table of Contents
=================

   * [<g-emoji class="g-emoji" alias="dragon_face" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f432.png">🐲</g-emoji> Maximum Solidity Environment <g-emoji class="g-emoji" alias="dragon_face" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f432.png">🐲</g-emoji>](#-maximum-solidity-environment-)
      * [Tools used:](#tools-used)
      * [Overview - Quick Setup:](#overview---quick-setup)
      * [From clone:](#from-clone)
      * [Step-by-step:](#step-by-step)
         * [Core: Truffle, Ganache, and npm](#core-truffle-ganache-and-npm)
            * [Initial Setup](#initial-setup)
            * [Truffle, npm, and Git](#truffle-npm-and-git)
         * [Testing, Linting, and Code Coverage: TypeScript, solhint, ESLint, solidity-coverage](#testing-linting-and-code-coverage-typescript-solhint-eslint-solidity-coverage)
            * [Testing: TypeScript, Dependencies, and Compiler Setup for Truffle](#testing-typescript-dependencies-and-compiler-setup-for-truffle)
               * [TypeScript Setup](#typescript-setup)
               * [Dependencies](#dependencies)
            * [Linting](#linting)
               * [solhint](#solhint)
               * [ESLint](#eslint)
            * [Code Coverage](#code-coverage)
               * [solidity-coverage](#solidity-coverage)
         * [CI/CD Cloud Tools: CircleCI, Codecov, LGTM](#cicd-cloud-tools-circleci-codecov-lgtm)
            * [CircleCI](#circleci)
            * [Codecov](#codecov)
            * [LGTM](#lgtm)
         * [Finishing touches](#finishing-touches)
      * [Usage](#usage)
      * [Versioning](#versioning)






## Tools used:
  * **Truffle** - Truffle is a development environment, testing framework and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier. [https://www.trufflesuite.com/truffle](https://www.trufflesuite.com/truffle)
  * **npm** - npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. [https://docs.npmjs.com/](https://docs.npmjs.com/)
  * **Ganache** - Quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates. **NOTE:** This environment uses `ganache-cli`. [https://github.com/trufflesuite/ganache-cli](https://github.com/trufflesuite/ganache-cli)
  * **TypeScript** - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
  * **solhint** - This is an open source project for linting Solidity code. [https://github.com/protofire/solhint](https://github.com/protofire/solhint)
  * **ESLint** - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. [https://github.com/eslint/eslint](https://github.com/eslint/eslint)
  * **solidity-coverage** - A code coverage tool for Solidity. [https://github.com/sc-forks/solidity-coverage](https://github.com/sc-forks/solidity-coverage)
  * **CircleCI** - CircleCI runs nearly one million jobs per day in support of 30,000 organizations. Organizations choose CircleCI because jobs run fast and builds can be optimized for speed. CircleCI can be configured to run very complex pipelines efficiently with sophisticated caching, docker layer caching, resource classes for running on faster machines, and performance pricing. [https://circleci.com/](https://circleci.com/)
  * **Codecov** - Codecov provides highly integrated tools to group, merge, archive, and compare coverage reports. [https://codecov.io/](https://codecov.io/)
  * **LGTM** - A code analysis platform for finding zero-days and preventing critical vulnerabilities. [https://lgtm.com/](https://lgtm.com/)

## Overview - Quick Setup:

To set this up in your own repo without going through the step-by-step process below, this section is for you!
  
To start, if you haven't already, setup your project as a git repository and an npm package:
  
```
git init
npm init
```

After running through the prompts, install all of the following packages:

```
npm i --save-dev truffle ganache-cli typescript chai @types/chai @types/mocha @types/node @machinomy/types-truffle @machinomy/types-truffle-contract @machinomy/types-truffle-resolver truffle-contract truffle-resolver solhint eslint eslint-config-google @typescript-eslint/parser @typescript-eslint/eslint-plugin solidity-coverage 
```

Initialize Truffle:

```
truffle init
```

Finally, add the following to your files:

**package.json**
```javascript
  // ...
  "scripts": {
    "test": "rm -rf ./test/bin/ && tsc --project ./test/tsconfig.json && truffle test ./test/bin/*",
    "compile": "npx truffle compile",
    "chain": "ganache-cli",
    "coverage": "npx solidity-coverage",
    "lint": "npm run lint:sol && npm run lint:ts",
    "lint:fix": "npm run lint:ts:fix",
    "lint:sol": "solhint --max-warnings 0 \"contracts/**/*.sol\"",
    "lint:ts": "eslint ./test/src/**/*.ts",
    "lint:ts:fix": "eslint --fix ./test/src/**/*.ts"
  // ..
```

**.circleci/config.yml**  
Copy: [https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.circleci/config.yml](https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.circleci/config.yml)
  
**.eslintrc.js**  
Copy: [https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.eslintrc.js](https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.eslintrc.js)
  
**.gitattributes**  
Copy: [https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.gitattributes](https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.gitattributes)
  
**.gitignore**  
Copy: [https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.gitignore](https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.gitignore)
  
**.solcover.js**  
Copy: [https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.solcover.js](https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.solcover.js)
  
**.solhint.json**  
Copy: [https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.solhint.json](https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/.solhint.json)
  
**truffle-config.js**  
Copy: [https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/truffle-config.js](https://github.com/Luiserebii/Maximum-Solidity-Environment/blob/master/truffle-config.js)
  
At this point, all that is necessary is to signup on CircleCI, Codecov, and LGTM, and set them up with the repo.

## From clone:

Another option for using this is cloning the repo and replacing the repo-specific values with your own. One motivation might be, if you're having trouble setting up the repo in any of the other ways for any reason, this repo should be guaranteed to have running tests and compiling contracts, so you can work by modifying a successful setup.

To accomplish this, clone the repo:
```
git clone https://github.com/Luiserebii/Maximum-Solidity-Environment
```

Install all dependencies:
```
npm i
```

And finally, within package.json, replace the following values with your own:

**package.json**
```javascript
{
  "name": "maximum-solidiy-environment",
  "version": "1.0.0",
  "description": "The ultimate environment for Solidity development. The final choice. The end.",
  // ...
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Luiserebii/Maximum-Solidity-Environment.git"
  },
  "author": "Luiserebii",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/Luiserebii/Maximum-Solidity-Environment/issues"
  },
  "homepage": "https://github.com/Luiserebii/Maximum-Solidity-Environment#readme",
  // ...   
}
```

Like in the Quick Setup, at this point, all that is necessary is to signup on CircleCI, Codecov, and LGTM, and set them up with the repo.


## Step-by-step:

### Core: Truffle, Ganache, and npm

#### Initial Setup
* Install Node.js and npm (if not installed already)
  * [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* Create a new project directory, and `cd` into it.
* Initialize a new git project:
  * ```git init```
* Initialize an npm project by creating a package.json file:
  * ```npm init```

####  Truffle, npm, and Git
* Install Truffle: 
  * ```npm i --save-dev truffle```
* Generate truffle files: 
  * ```truffle init```
* Create `.gitignore`, and ignore:
  * Any temporary files created by text editor/IDE (e.g. `.swo` and `.swp` by vim)
  * `node_modules/` (dependency installations)
  * `build/` (contract build folder generated by Truffle during compilation)
* Install ganache-cli (test blockchain): ```npm i --save-dev ganache-cli```
* Within `truffle-config.js`, uncomment the `development` object underneath `networks`:

**truffle-config.js**
```javascript
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
```
* Set up `compile` and `chain` scripts within `package.json`. After doing so, your file should look something like this:

**package.json** 
```JSON
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "npx truffle compile",
    "chain": "ganache-cli",
  }
```
* Regarding our new scripts:
  * `compile`: A convenience script for compiling our contracts. Nice to have, as we take the opportunity to pass any options we want through here.
  * `chain`: Run a development blockchain.
  * To run any npm script, the general syntax is `npm run [scriptname]`. Therefore, to run the two scripts we just added:
    * `npm run compile`, and
    * `npm run chain`
  * We will be leaving the `test` script generated by npm alone for now, and will be editing it later.

### Testing, Linting, and Code Coverage: TypeScript, solhint, ESLint, solidity-coverage

#### Testing: TypeScript, Dependencies, and Compiler Setup for Truffle
##### TypeScript Setup

* Install TypeScript: ```npm i --save-dev typescript```
* Create `src` and `bin` folders within the `test` directory created by Truffle.
  * `src`: The folder where we will place our TypeScript test files. These Typscript files (`.ts`) will be compiled into JavaScript and placed in `bin`. 
  * `bin`: This folder is reserved for built Javascript test files compiled by TypeScript, which will be consumed by Truffle for testing.
    * Since `bin` will contain compiled files, let's add it to the `.gitignore` as well!

##### Dependencies
* Mocha and Chai are included within Truffle, so technically, there should be no need to install them! This comes with a caveat, however...
  * TypeScript will yell at us about `error TS2304: Cannot find name 'assert'.`, so we will need to import chai into our tests and declare assert, and thus, install it.
  * `npm i --save-dev chai`
* We will also need to install some dependencies so TypeScript can pick up some of the types we'll be using:
```
npm i --save-dev @types/chai @types/mocha @types/node @machinomy/types-truffle @machinomy/types-truffle-contract @machinomy/types-truffle-resolver
```
  * The Truffle-specific typing packages have dependencies themselves, so we will also need install them:
```
npm i --save-dev truffle-contract truffle-resolver
```
* Now, we need to create a `tsconfig.json file` to pass to the Typescript compiler (`tsc`). This will allow us to specify options, such as which folder to compile, and where to send the compiled files to, among others. The following commands will generate this for us. Switch into the test directory, and initialize it through `tsc`:
```
cd test
tsc --init
```
  * We can now modify `tsconfig.json` according to our setup:
    * Modify target to `"ES2017"`
    * Uncomment `"outDir"` and set it to `"./bin"`
    * And, add our typing packages to the `"compilerOptions"`:

**tsconfig.json**
```javascript
    // ...
    "types": [
      "@types/node",
      "@types/mocha",
      "@types/chai",
      "@machinomy/types-truffle",
      "@machinomy/types-truffle-contract",
      "@machinomy/types-truffle-resolver"
    ],   
    // ...
```
  * This should now look more or less like the following (many options commented out are shown in the generated file, but are excluded here for brevity):

**tsconfig.json**
```javascript
{
  "compilerOptions": {
    "target": "ES2017",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "outDir": "./bin",                        /* Redirect output structure to the directory. */
    "strict": true,                           /* Enable all strict type-checking options. */
    "types": [
      "@types/node",
      "@types/mocha",
      "@types/chai",
      "@machinomy/types-truffle",
      "@machinomy/types-truffle-contract",
      "@machinomy/types-truffle-resolver"
    ],   
    "esModuleInterop": true                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
  }
}
```
* Finally, we can add our testing script:

**package.json**
```javascript
  "scripts": {
    "test": "rm -rf ./test/bin && tsc --project ./test/tsconfig.json && truffle test ./test/bin/*"
    // ...
  }
```



#### Linting

##### solhint
* First, let's set up Solidity linting via `solhint`. Install via:
  * `npm i --save-dev solhint`
* Next, create and setup `.solhint.json`. This is a pretty good configuration that can be used:

**.solhint.json**
```JSON
{
  "extends": "solhint:recommended",
  "rules": {
    "indent": ["error", 4],
    "func-order": "off",
    "bracket-align": "off",
    "compiler-fixed": "off",
    "no-simple-event-func-name": "off",
    "separate-by-one-line-in-contract": "off",
    "two-lines-top-level-separator": "off",
    "mark-callable-contracts": "off",
    "compiler-version": ["error", "^0.5.0"]
  }
}
```
  * Finally, add the following script, `lint:sol`:

**package.json**
```javascript
  "scripts": {
    // ...
    "lint:sol": "solhint --max-warnings 0 \"contracts/**/*.sol\"",
    // ...
  }
```

##### ESLint
* Next, comes TypeScript linting via ESLint. Install via: 
  * `npm i --save-dev eslint`
* We'll be using Google's style guide plugin: 
  * `npm i --save-dev eslint-config-google`
* We will also need the TypeScript ESLint parser and plugin: 
  * `npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin`
* Finally, setup `.eslintrc.js`. The following is a pretty good configuration that can be used:

**.eslintrc.js**
```javascript
module.exports = {
  'env': {
    'es6': true,
    "node": true,
    "mocha": true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'rules': {
    'max-len': ['error', 120, 2],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  },
  "plugins": [
    "@typescript-eslint"
  ]
};

```
* Within package.json, edit the "lint" script and add the new linting scripts below. `lint` will handle both the solhint and ESLint linting. Since no option for fixing linting errors found by solhint exists, `lint:fix` will just reference `lint:ts:fix` for the time being:

**package.json**
```javascript
  "scripts": {
    // ...
    "lint": "npm run lint:sol && npm run lint:ts",
    "lint:fix": "npm run lint:ts:fix",
    "lint:sol": "solhint --max-warnings 0 \"contracts/**/*.sol\"",
    "lint:ts": "eslint ./test/src/**/*.ts",
    "lint:ts:fix": "eslint --fix ./test/src/**/*.ts"
  }
```

#### Code Coverage

##### solidity-coverage

* Install `solidity-coverage`: 
  * `npm i --save-dev solidity-coverage`
* Add this script to package.json: 

**package.json**
```javascript
  "scripts": {
    // ...
    "coverage": "npx solidity-coverage",
    // ...
  }
```
* And, add a configuration file `.solcover.js`. We'll be asking it to use `npm t` for the testing command (shorthand for `npm test`), and to skip `Migrations.sol`:

**.solcover.js**
```javascript
module.exports = {
    testCommand: 'npm t',
    skipFiles: [
        'Migrations.sol',
    ]
};
```

### CI/CD Cloud Tools: CircleCI, Codecov, LGTM 

#### CircleCI

* CircleCI is pretty easy to set up. First, make an account on the CircleCI webpage. [https://circleci.com/signup/](https://circleci.com/signup/)
* Next, add a `.circleci` folder at the root of the directory:
  * `mkdir .circleci`
* Move to this new directory and add the following YAML file as `config.yml` to it:

**config.yml**
```yaml
# Recommended documentation on CircleCI and node applications: https://circleci.com/docs/2.0/language-javascript/

version: 2
# 2.1 does not yet support local run
# unless with workaround. For simplicity just use it.
# https://github.com/CircleCI-Public/circleci-cli/issues/79

aliases:
  # Alias for any default options
  - &defaults
    docker:
      - image: circleci/node:10.12 # Docker Node 10.12 image.
 
  # Alias for installing npm, if necessary (hence the name)
  - &npm_install_if_necessary
    run:
      name: Install npm dependencies
      command: |
        # If no node_modules directory
        if [ ! -d node_modules ]; then 
          # Perform a clean npm install
          npm ci
        fi
  # Alias for caching - caches node dependencies with a cache key
      # template for an environment variable,
      # see circleci.com/docs/2.0/caching/
  - &cache_key_node_modules
    key: v1-node_modules-{{ checksum "package-lock.json" }}

jobs:
  dependencies:
    <<: *defaults # << is used to inject an alias
    steps:
      - checkout
      - restore_cache: # special step to restore the dependency cache
          <<: *cache_key_node_modules
      - *npm_install_if_necessary
      - save_cache: # special step to save the dependency cache
          paths:
            - node_modules
          <<: *cache_key_node_modules # Insert our alias to specify cache key to save to

  lint:
    <<: *defaults
    steps:
      - checkout
      - restore_cache:
          <<: *cache_key_node_modules
      - *npm_install_if_necessary
      - run:
          name: Linter
          command: npm run lint
  test:
    <<: *defaults
    steps:
      - checkout
      - restore_cache:
          <<: *cache_key_node_modules
      - *npm_install_if_necessary
      - run: 
          name: Run development blockchain
          command: npm run chain
          background: true
      - run:
          name: Unit tests
          command: npm test
  coverage:
    <<: *defaults
    steps:
      - checkout
      - restore_cache:
          <<: *cache_key_node_modules
      - *npm_install_if_necessary
      - run:
          name: Unit tests with coverage report
          command: npm run coverage

workflows:
  version: 2
  everything:
    jobs: # For reference, all jobs run in parallel
      - dependencies
      - lint:
          requires:
            - dependencies # Wait for dependencies jobs to finish before running
      - test:
          requires:
            - dependencies
      - coverage:
          requires:
            - dependencies
```
* Push this to your repo. For example, if using `master` as your default branch, this would be:
  * `git push origin master`
* Finally, enable CircleCI on this repository within the online app, and everything should be up and running!

#### Codecov

* Codecov is also fairly easy to set up!
* Head to [https://codecov.io](https://codecov.io) and setup a new account.
* Activate Codecov for your repository within the online app.
* Finally, head to your `.circleci/config.yml` file, and edit it as so:

**config.yml**
```yaml
  coverage:
    <<: *defaults
    steps:
      - checkout
      - restore_cache:
          <<: *cache_key_node_modules
      - *npm_install_if_necessary
      - run:
          name: Install Codecov
          command: sudo npm install -g codecov
      - run:
          name: Unit tests with coverage report
          command: npm run coverage
      - run:
          name: Run Codecov
          command: codecov
``` 
  * The new additions are the `Install Codecov` and `Run Codecov` scripts respectively.
* Push these new changes to your repo, and you should have Codecov update with your report!

#### LGTM

* LGTM is even easier to setup; just head to [https://lgtm.com](https://lgtm.com/) and setup a new account
* Add your project by copy-pasting the GitHub repository URL over
* Wait for it to build and analyze; this can take some time. You should get a notification via email when it's finished!

### Finishing touches

* Add some badges:
  * For CircleCI, this can be found under Settings -> Integrations -> Status Badges.
  * For Codecov, look under Settings -> Badge
  * For LGTM, look under Integrations -> Project badges
  * Just add the Markdown text and paste into the README! 
  * For more, check out [shields.io](https://shields.io/)
* Add a LICENSE (MIT recommended)
  * This can be generated by looking over your repo on GitHub and navigating to Insights -> Community -> License
* Add the following to a new file `.gitattributes`. This will allow GitHub to recognize your .sol files as Solidity
```
*.sol linguist-language=Solidity
```

## Usage

This section will focus on using the setup of the environment. Ideally, you should get a solid grasp on how to work from here onwards.

Solidity smart contracts (appended with `.sol`) should be written within the `contracts/` directory. Contract tests, written in TypeScript (appended with `.ts`) should be kept within the `test/src/` directory.

Compiling contracts is simple, just run `npm run compile`.

To test your contracts, you will need to open a test chain in a different terminal. Run `npm run chain` in one, and `npm t` in the other. The test script connects to the locally running instance of Ganache, which is why this is necessary.

In order to make sure your code is linted, all you have to do is run `npm run lint`. If you need to be more specific:
  * Solidity: `npm run lint:sol`
  * TypeScript: `npm run lint:ts`
  
Sometimes, errors/warnings from ESLint can be fixed automatically by the tool. To do so, run `npm run lint:fix`, or `npm run lint:ts:fix` if you want to be specific. Both will do the same, as there is no `solhint --fix` at the moment.

To check for code coverage, simply run `npm run coverage`.

This should be more or less evident by `package.json`, but a brief overview might help clarify things. With an understanding of the development flow with this environment, using this should be simple.

## Versioning

If it helps, this was all run on Node v10.15.3 and npm 6.4.1. Further versioning information can be found in the `package-lock.json`.

## Credits

I'd like to give credits to the [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts) repo, much of the setup of these files are largely inspired by them. Many of the modifications made were to accommodate TypeScript integration.
