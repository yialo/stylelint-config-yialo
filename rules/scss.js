'use strict';

const rawRules = {
  'at-each-key-value-single-line': null,
  'at-else-closing-brace-newline-after': 'always-last-in-chain',
  'at-else-closing-brace-space-after': 'always-intermediate',
  'at-else-empty-line-before': 'never',
  'at-else-if-parentheses-space-before': null,
  'at-extend-no-missing-placeholder': null,
  'at-function-named-arguments': null,
  'at-function-parentheses-space-before': null,
  'at-function-pattern': null,
  'at-if-closing-brace-newline-after': 'always-last-in-chain',
  'at-if-closing-brace-space-after': 'always-intermediate',
  'at-if-no-null': null,
  'at-import-no-partial-leading-underscore': null,
  'at-import-partial-extension-blacklist': null,
  'at-import-partial-extension-whitelist': null,
  'at-import-partial-extension': null,
  'at-mixin-argumentless-call-parentheses': 'always',
  'at-mixin-named-arguments': null,
  'at-mixin-parentheses-space-before': 'never',
  'at-mixin-pattern': null,
  'at-rule-conditional-no-parentheses': null,
  'at-rule-no-unknown': null,
  'comment-no-empty': null,
  'comment-no-loud': null,
  'declaration-nested-properties-no-divided-groups': null,
  'declaration-nested-properties': null,
  'dimension-no-non-numeric-values': null,
  'dollar-variable-colon-newline-after': null,
  'dollar-variable-colon-space-after': null,
  'dollar-variable-colon-space-before': null,
  'dollar-variable-default': null,
  'dollar-variable-empty-line-after': null,
  'dollar-variable-empty-line-before': null,
  'dollar-variable-first-in-block': null,
  'dollar-variable-no-missing-interpolation': null,
  'dollar-variable-pattern': null,
  'double-slash-comment-empty-line-before': null,
  'double-slash-comment-inline': null,
  'double-slash-comment-whitespace-inside': null,
  'function-color-relative': null,
  'function-quote-no-quoted-strings-inside': null,
  'function-unquote-no-unquoted-strings-inside': null,
  'map-keys-quotes': null,
  'media-feature-value-dollar-variable': null,
  'no-dollar-variables': null,
  'no-duplicate-dollar-variables': null,
  'no-duplicate-mixins': null,
  'no-global-function-names': null,
  'operator-no-newline-after': null,
  'operator-no-newline-before': null,
  'operator-no-unspaced': null,
  'partial-no-import': null,
  'percent-placeholder-pattern': null,
  'selector-nest-combinators': null,
  'selector-no-redundant-nesting-selector': true,
  'selector-no-union-class-name': null,
};

module.exports.rules = Object.entries(rawRules).reduce((result, [key, value]) => {
  result[`scss/${key}`] = value;
  return result;
}, {});
