module.exports = {
  'env': {
    'es6': true,
    'node': true,
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
    'max-len': ['error', 120, 2]
  },
};
