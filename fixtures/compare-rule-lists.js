'use strict';

const { rules: referenceCoreRules_raw } = require('stylelint');
const referenceScssRulePlugins = require('stylelint-scss');

const { rules: myCoreRules_raw } = require('../rules/core');
const { rules: myScssRules_raw } = require('../rules/scss');

const referenceCoreRules = Object.keys(referenceCoreRules_raw).map(
  (ruleName) => {
    const ruleFilePath = require.resolve(`stylelint/lib/rules/${ruleName}`);
    return require(ruleFilePath);
  }
);
const referenceScssRules = referenceScssRulePlugins.map(({ rule }) => rule);

const myCoreRules = Object.entries(myCoreRules_raw);
const myScssRules = Object.entries(myScssRules_raw);

const compareRuleLists = ({ myRules, referenceRules }, pluginName) => {
  const myRuleNames = myRules.map(([ruleName]) => ruleName);

  const nonDeprecatedReferenceRuleNames = referenceRules
    .filter((rule) => !rule.meta?.deprecated)
    .map(({ ruleName }) => ruleName);

  const missedRuleNames = nonDeprecatedReferenceRuleNames.filter(
    (ruleName) => !myRuleNames.includes(ruleName)
  );

  const extraneousRuleNames = myRuleNames.filter(
    (ruleName) =>
      !referenceRules.some((refRule) => refRule.ruleName === ruleName)
  );

  const deprecatedReferenceRuleNames = referenceRules
    .filter((rule) => rule.meta?.deprecated)
    .map(({ ruleName }) => ruleName);

  const deprecatedRuleNames = myRuleNames.filter((ruleName) =>
    deprecatedReferenceRuleNames.includes(ruleName)
  );

  console.group('plugin:', pluginName);
  console.log('missedRuleNames', missedRuleNames);
  console.log('extraneousRuleNames', extraneousRuleNames);
  console.log('deprecatedRuleNames', deprecatedRuleNames);
  console.groupEnd(pluginName);
};

compareRuleLists(
  {
    myRules: myCoreRules,
    referenceRules: referenceCoreRules,
  },
  'core'
);

compareRuleLists(
  {
    myRules: myScssRules,
    referenceRules: referenceScssRules,
  },
  'scss'
);
