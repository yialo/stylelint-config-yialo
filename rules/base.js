'use strict';

module.exports.rules = {
  'at-rule-empty-line-before': null,
  'at-rule-name-case': 'lower',
  'at-rule-name-space-after': 'always-single-line',
  'at-rule-no-unknown': null,
  'at-rule-no-vendor-prefix': true,
  'at-rule-semicolon-newline-after': 'always',
  'block-closing-brace-empty-line-before': 'never',
  'block-closing-brace-newline-after': [
    'always',
    {
      ignoreAtRules: [
        'if'
      ]
    }
  ],
  'block-closing-brace-newline-before': 'always',
  'block-closing-brace-space-after': 'always-single-line',
  'block-closing-brace-space-before': 'always-single-line',
  'block-no-empty': true,
  'block-opening-brace-newline-after': 'always',
  'block-opening-brace-space-after': 'always-single-line',
  'block-opening-brace-space-before': 'always',
  'color-hex-case': 'lower',
  'color-hex-length': 'long',
  'color-no-invalid-hex': true,
  'comment-no-empty': true,
  'declaration-bang-space-after': 'never',
  'declaration-bang-space-before': 'always',
  'declaration-block-no-duplicate-properties': [
    true,
    {
      ignoreProperties: [
        'composes'
      ]
    }
  ],
  'declaration-block-no-shorthand-property-overrides': true,
  'declaration-block-semicolon-newline-after': 'always',
  'declaration-block-semicolon-newline-before': 'never-multi-line',
  'declaration-block-semicolon-space-after': 'always-single-line',
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-trailing-semicolon': 'always',
  'declaration-colon-space-after': 'always-single-line',
  'declaration-colon-space-before': 'never',
  'declaration-no-important': null,
  'font-family-name-quotes': 'always-unless-keyword',
  'font-family-no-duplicate-names': true,
  'font-family-no-missing-generic-family-keyword': true,
  'font-weight-notation': 'numeric',
  'function-calc-no-unspaced-operator': true,
  'function-comma-newline-after': 'always-multi-line',
  'function-comma-newline-before': 'never-multi-line',
  'function-comma-space-after': 'always-single-line',
  'function-comma-space-before': 'never',
  'function-linear-gradient-no-nonstandard-direction': true,
  'function-max-empty-lines': 0,
  'function-name-case': null,
  'function-parentheses-space-inside': 'never-single-line',
  'function-url-quotes': 'always',
  'function-whitespace-after': 'always',
  'indentation': [
    2,
    {
      ignore: [
        'inside-parens'
      ]
    }
  ],
  'keyframe-declaration-no-important': true,
  'length-zero-no-unit': true,
  'max-empty-lines': 1,
  'media-feature-colon-space-after': 'always',
  'media-feature-colon-space-before': 'never',
  'media-feature-name-case': 'lower',
  'media-feature-name-no-unknown': true,
  'media-feature-name-no-vendor-prefix': true,
  'media-feature-parentheses-space-inside': 'never',
  'media-feature-range-operator-space-after': 'always',
  'media-feature-range-operator-space-before': 'always',
  'media-query-list-comma-newline-after': 'always-multi-line',
  'media-query-list-comma-newline-before': 'never-multi-line',
  'media-query-list-comma-space-after': 'always-single-line',
  'media-query-list-comma-space-before': 'never-single-line',
  'no-duplicate-at-import-rules': true,
  'no-duplicate-selectors': true,
  'no-empty-source': true,
  'no-eol-whitespace': true,
  'no-extra-semicolons': true,
  'no-invalid-double-slash-comments': true,
  'no-missing-end-of-source-newline': true,
  'number-leading-zero': 'always',
  'number-no-trailing-zeros': true,
  'property-case': 'lower',
  'property-no-vendor-prefix': true,
  'rule-empty-line-before': [
    'always',
    {
      except: [
        'first-nested'
      ],
      ignore: [
        'after-comment'
      ]
    }
  ],
  'selector-attribute-brackets-space-inside': 'never',
  'selector-attribute-operator-space-after': 'never',
  'selector-attribute-operator-space-before': 'never',
  'selector-attribute-quotes': 'always',
  'selector-combinator-space-after': 'always',
  'selector-combinator-space-before': 'always',
  'selector-descendant-combinator-no-non-space': true,
  'selector-list-comma-newline-after': 'always',
  'selector-list-comma-newline-before': 'never-multi-line',
  'selector-list-comma-space-after': 'always-single-line',
  'selector-list-comma-space-before': 'never',
  'selector-max-empty-lines': 0,
  'selector-max-id': 0,
  'selector-pseudo-class-case': 'lower',
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: [
        'global',
        'local'
      ]
    }
  ],
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'selector-pseudo-element-case': 'lower',
  'selector-pseudo-element-colon-notation': 'double',
  'selector-pseudo-element-no-unknown': true,
  'selector-type-case': 'lower',
  'selector-type-no-unknown': true,
  'string-no-newline': true,
  'string-quotes': 'double',
  'unit-case': 'lower',
  'unit-no-unknown': true,
  'value-keyword-case': [
    'lower',
    {
      ignoreProperties: [
        'composes'
      ]
    }
  ],
  'value-list-comma-newline-after': 'always-multi-line',
  'value-list-comma-newline-before': 'never-multi-line',
  'value-list-comma-space-after': 'always-single-line',
  'value-list-comma-space-before': 'never',
  'value-list-max-empty-lines': 0,
  'value-no-vendor-prefix': true
};