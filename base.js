'use strict';

const { reports } = require('./partials');
const { rules } = require('./rules/core');

module.exports = {
  ...reports,
  rules,
};
