'use strict';

const rules = require('./rules/scss.json');

module.exports = {
  plugins: ['stylelint-scss'],
  rules,
};
