'use strict';

const { rules: baseRules } = require('./base.js');
const { rules: scssRules } = require('./scss.js');

module.exports = {
  plugins: ['stylelint-scss'],
  rules: {
    ...baseRules,
    ...scssRules,
  },
};
