'use strict';

const { reports } = require('./partials');
const { rules } = require('./rules/core');

const baseConfig = {
  ...reports,
  rules,
};

module.exports = baseConfig;
