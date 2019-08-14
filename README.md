# Maximum-Solidity-Environment
The ultimate environment for Solidity development. The final choice. The end.

## Tools used:
  * Truffle
  * npm

## Reproduce:

#### Core: Truffle, Ganache, and npm
* Install Truffle
* Install npm: 
  * ```npm i --save-dev truffle```
* Generate truffle files: 
  * ```truffle init```
* Generate package.json:
  * ```npm init```
* Create .gitignore, and ignore:
  * Any temporary files created by text editor/IDE (e.g. `.swo` and `.swp` by vim)
  * `node_modules/` (dependency installations)
  * `build` (contract build folder generated by Truffle during compilation)
* Install ganache-cli (test blockchain): ```npm i --save-dev ganache-cli```
* Set up scripts in package.json: 
```JSON
  "scripts": {
    "compile": "npx truffle compile",
    "chain": "ganache-cli",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
  * Runnable now via `npm run chain`

#### Testing, Linting: 
* Mocha and Chai are included within Truffle, so no need to install them!
* TypeScript, however, a stricter superset of JavaScript, must be: ```npm i --save-dev typescript```
* Create a `src` and `bin` folder within `test`
  * `src` will be where we will place our TypeScript test files
  * `bin` will be reserved for our built Javascript test files, which will be consumed by Mocha for testing
    * Since `bin` will contain compiled files, let's add it to .gitignore as well
* We will also need to install some dependencies so TypeScript can pick up some of the types we'll be using:
```
npm i --save-dev @types/chai @types/mocha @types/node @machinomy/types-truffle @machinomy/types-truffle-contract @machinomy/types-truffle-resolver
```
  * The truffle-specific types have dependencies themselves, so we will also need install them:
```
npm i --save-dev truffle-contract truffle-resolver
```
* Now, we need to create a tsconfig.json file to pass to the Typescript compiler (`tsc`)
```
cd test
tsc --init
```
  * We can now modify .tsconfig according to our setup:
    * Modify target to `"ES2017"`
    * Uncomment outDir and set it to `"./bin"`
    * And, add our types to the `"compilerOptions"`:
```
    "types": [
      "@types/node",
      "@types/mocha",
      "@types/chai",
      "@machinomy/types-truffle",
      "@machinomy/types-truffle-contract",
      "@machinomy/types-truffle-resolver"
    ],   
```
  * This should now look more or less like the following (many options commented out are shown in the generated file, but are excluded here for brevity):
```JSON
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
```JSON
  "scripts": {
    ...
    "test": "tsc --project ./test/tsconfig.json && truffle test ./test/bin/*"
  }
```



##### Linting

* First, let's set up Solidity linting via `solhint`
  * Install via: `npm i --save-dev solhint`
  * Next, setup `.solhint.json`. This is a pretty good configuration that can bd used:
```
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
  * Finally, add the following script:
```JSON
  "scripts": {
    ...
    "lint:sol": "solhint --max-warnings 0 \"contracts/**/*.sol\"",
    ...
  }
```


#### CI/CD Cloud Tools 

#### Finishing touches

* Add a LICENSE (MIT recommended)
* Add the following to a new file `.gitattributes`. This will allow GitHub to recognize your .sol files as Solidity
```
*.sol linguist-language=Solidity
```
