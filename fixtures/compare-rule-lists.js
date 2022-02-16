'use strict';

const { rules: referenceCoreRules } = require('stylelint');
const { default: referenceScssRules } = require('stylelint-scss');

const { rules: myCoreRules } = require('../rules/core');
const { rules: myScssRules } = require('../rules/scss');

const compareRuleLists = ({ myRuleNames, referenceRuleNames }, pluginName) => {
  const missedRuleNames = referenceRuleNames.filter((ruleName) => !myRuleNames.includes(ruleName));

  const extraneousRuleNames = myRuleNames.filter((ruleName) => !referenceRuleNames.includes(ruleName));

  console.group(pluginName);
  console.log('missedRuleNames', missedRuleNames);
  console.log('extraneousRuleNames', extraneousRuleNames);
  console.groupEnd(pluginName);
};

const referenceCoreRuleNames = Object.keys(referenceCoreRules);
const myCoreRuleNames = Object.keys(myCoreRules);

compareRuleLists({
  myRuleNames: myCoreRuleNames,
  referenceRuleNames: referenceCoreRuleNames,
}, 'core');

const referenceScssRuleNames = referenceScssRules.map(({ ruleName }) => ruleName);
const myScssRuleNames = Object.keys(myScssRules);

compareRuleLists({
  myRuleNames: myScssRuleNames,
  referenceRuleNames: referenceScssRuleNames,
}, 'scss');
