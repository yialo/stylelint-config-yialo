'use strict';

const { reports } = require('./partials');
const { rules: baseRules } = require('./rules/core');
const { rules: scssRules } = require('./rules/scss');

module.exports = {
  ...reports,
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-scss'],
  rules: {
    ...baseRules,
    ...scssRules,
  },
};
