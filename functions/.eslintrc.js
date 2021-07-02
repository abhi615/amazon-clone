module.exports = {
  'root': true,
  'env': {
    es6: true,
    node: true,
  },
  'extends': [
    'eslint:recommended',
    'google',
  ],


  'parserOptions': {
    // Required for certain syntax usages
    'ecmaVersion': 2017,
  },
  'plugins': [
    'promise',
  ],
};
