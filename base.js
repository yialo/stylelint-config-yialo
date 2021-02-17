'use strict';

const { rules } = require('./rules/core');

module.exports = {
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  rules,
};
