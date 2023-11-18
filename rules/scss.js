'use strict';

const coreRules = require('./core.js').rules;

const ownRules = {
  'scss/at-each-key-value-single-line': null,
  'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
  'scss/at-else-closing-brace-space-after': 'always-intermediate',
  'scss/at-else-empty-line-before': 'never',
  'scss/at-else-if-parentheses-space-before': null,
  'scss/at-extend-no-missing-placeholder': null,
  'scss/at-function-named-arguments': null,
  'scss/at-function-parentheses-space-before': null,
  'scss/at-function-pattern': null,
  'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
  'scss/at-if-closing-brace-space-after': 'always-intermediate',
  'scss/at-if-no-null': null,
  'scss/at-import-partial-extension-blacklist': null,
  'scss/at-import-partial-extension-whitelist': null,
  'scss/at-import-partial-extension': null,
  'scss/at-mixin-argumentless-call-parentheses': 'always',
  'scss/at-mixin-named-arguments': null,
  'scss/at-mixin-parentheses-space-before': 'never',
  'scss/at-mixin-pattern': null,
  'scss/at-root-no-redundant': true,
  'scss/at-rule-conditional-no-parentheses': null,
  'scss/at-use-no-redundant-alias': true,
  'scss/at-use-no-unnamespaced': null,
  'scss/block-no-redundant-nesting': null,
  'scss/comment-no-loud': null,
  'scss/declaration-nested-properties-no-divided-groups': null,
  'scss/declaration-nested-properties': null,
  'scss/dimension-no-non-numeric-values': null,
  'scss/dollar-variable-colon-newline-after': null,
  'scss/dollar-variable-colon-space-after': null,
  'scss/dollar-variable-colon-space-before': null,
  'scss/dollar-variable-default': null,
  'scss/dollar-variable-empty-line-after': null,
  'scss/dollar-variable-empty-line-before': null,
  'scss/dollar-variable-first-in-block': null,
  'scss/dollar-variable-no-missing-interpolation': null,
  'scss/dollar-variable-no-namespaced-assignment': true,
  'scss/dollar-variable-pattern': null,
  'scss/double-slash-comment-empty-line-before': null,
  'scss/double-slash-comment-inline': null,
  'scss/double-slash-comment-whitespace-inside': null,
  'scss/function-calculation-no-interpolation': null,
  'scss/function-color-relative': null,
  'scss/function-disallowed-list': null,
  'scss/function-quote-no-quoted-strings-inside': null,
  'scss/function-unquote-no-unquoted-strings-inside': null,
  'scss/load-no-partial-leading-underscore': true,
  'scss/map-keys-quotes': null,
  'scss/media-feature-value-dollar-variable': null,
  'scss/no-dollar-variables': null,
  'scss/no-duplicate-dollar-variables': true,
  'scss/no-duplicate-mixins': true,
  'scss/no-global-function-names': true,
  'scss/operator-no-newline-after': null,
  'scss/operator-no-newline-before': null,
  'scss/operator-no-unspaced': null,
  'scss/partial-no-import': null,
  'scss/percent-placeholder-pattern': null,
  'scss/selector-nest-combinators': null,
  'scss/selector-no-redundant-nesting-selector': true,
  'scss/selector-no-union-class-name': null,
};

const coreRuleNamesNeedAdaptation = {
  toExtend: [
    'at-rule-no-unknown',
    'comment-no-empty',
    'function-no-unknown',
    'property-no-unknown',
  ],
  toAdjust: [
    'declaration-property-value-no-unknown',
    'media-query-no-invalid',
    'no-invalid-position-at-import-rule',
  ],
};

const extensibleCoreRuleNameEnum = Object.fromEntries(
  coreRuleNamesNeedAdaptation.toExtend.map((ruleName) => [ruleName, ruleName])
);
const adjustableCoreRuleNameEnum = Object.fromEntries(
  coreRuleNamesNeedAdaptation.toAdjust.map((ruleName) => [ruleName, ruleName])
);

const extensionRules = {
  'scss/at-rule-no-unknown':
    coreRules[extensibleCoreRuleNameEnum['at-rule-no-unknown']],
  'scss/comment-no-empty':
    coreRules[extensibleCoreRuleNameEnum['comment-no-empty']],
  'scss/function-no-unknown':
    coreRules[extensibleCoreRuleNameEnum['function-no-unknown']],
  'scss/property-no-unknown':
    coreRules[extensibleCoreRuleNameEnum['property-no-unknown']],
};

module.exports.coreRulesAdaptedForScssPlugin = {
  ...Object.fromEntries(
    coreRuleNamesNeedAdaptation.toExtend.map((ruleName) => [ruleName, null])
  ),
  [adjustableCoreRuleNameEnum['declaration-property-value-no-unknown']]: null,
  [adjustableCoreRuleNameEnum['no-invalid-position-at-import-rule']]: [
    coreRules[adjustableCoreRuleNameEnum['no-invalid-position-at-import-rule']],
    {
      ignoreAtRules: ['use', 'forward'],
    },
  ],
  [adjustableCoreRuleNameEnum['media-query-no-invalid']]: null,
};

module.exports.rules = {
  ...ownRules,
  ...extensionRules,
};
