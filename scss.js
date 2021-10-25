'use strict';

const { rules } = require('./rules/scss');

module.exports = {
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-scss'],
  rules,
};
