'use strict';

const { reports } = require('./partials');
const { rules: coreRulesAll } = require('./rules/core');
const {
  rules: scssRules,
  coreRulesAdaptedForScssPlugin,
} = require('./rules/scss');

const scssConfig = {
  ...reports,
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-scss'],
  rules: {
    ...coreRulesAll,
    ...coreRulesAdaptedForScssPlugin,
    ...scssRules,
  },
};

module.exports = scssConfig;
