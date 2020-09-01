'use strict';

const { rules } = require('./rules/scss');

module.exports = {
  plugins: ['stylelint-scss'],
  rules,
};
