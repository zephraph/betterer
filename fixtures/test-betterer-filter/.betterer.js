const { bigger } = require('@betterer/constraints');

module.exports = {
  'test 1': {
    test: () => Date.now(),
    constraint: bigger
  },
  'test 2': {
    test: () => Date.now(),
    constraint: bigger
  },
  'test 3': {
    test: () => Date.now(),
    constraint: bigger
  }
};
