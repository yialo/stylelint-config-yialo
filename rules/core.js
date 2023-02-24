'use strict';

module.exports.rules = {
  'alpha-value-notation': null,
  'annotation-no-unknown': true,
  'at-rule-allowed-list': null,
  'at-rule-disallowed-list': null,
  'at-rule-empty-line-before': null,
  'at-rule-name-case': 'lower',
  'at-rule-name-newline-after': null,
  'at-rule-name-space-after': 'always-single-line',
  'at-rule-no-unknown': null,
  'at-rule-no-vendor-prefix': true,
  'at-rule-property-required-list': null,
  'at-rule-semicolon-newline-after': 'always',
  'at-rule-semicolon-space-before': null,
  'block-closing-brace-empty-line-before': 'never',
  'block-closing-brace-newline-after': [
    'always',
    {
      ignoreAtRules: ['if'],
    },
  ],
  'block-closing-brace-newline-before': 'always',
  'block-closing-brace-space-after': 'always-single-line',
  'block-closing-brace-space-before': 'always-single-line',
  'block-no-empty': true,
  'block-opening-brace-newline-after': 'always',
  'block-opening-brace-newline-before': null,
  'block-opening-brace-space-after': 'always-single-line',
  'block-opening-brace-space-before': 'always',
  'color-function-notation': null,
  'color-hex-alpha': null,
  'color-hex-case': 'lower',
  'color-hex-length': 'long',
  'color-named': null,
  'color-no-hex': null,
  'color-no-invalid-hex': true,
  'comment-empty-line-before': null,
  'comment-no-empty': true,
  'comment-pattern': null,
  'comment-whitespace-inside': null,
  'comment-word-disallowed-list': null,
  'custom-media-pattern': null,
  'custom-property-empty-line-before': null,
  'custom-property-no-missing-var-function': true,
  'custom-property-pattern': null,
  'declaration-bang-space-after': 'never',
  'declaration-bang-space-before': 'always',
  'declaration-block-no-duplicate-custom-properties': true,
  'declaration-block-no-duplicate-properties': [
    true,
    {
      ignore: ['consecutive-duplicates-with-different-values'],
      ignoreProperties: ['composes'],
    },
  ],
  'declaration-block-no-redundant-longhand-properties': null,
  'declaration-block-no-shorthand-property-overrides': true,
  'declaration-block-semicolon-newline-after': 'always',
  'declaration-block-semicolon-newline-before': 'never-multi-line',
  'declaration-block-semicolon-space-after': 'always-single-line',
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-single-line-max-declarations': null,
  'declaration-block-trailing-semicolon': 'always',
  'declaration-colon-newline-after': null,
  'declaration-colon-space-after': 'always-single-line',
  'declaration-colon-space-before': 'never',
  'declaration-empty-line-before': null,
  'declaration-no-important': null,
  'declaration-property-max-values': null,
  'declaration-property-unit-allowed-list': null,
  'declaration-property-unit-disallowed-list': null,
  'declaration-property-value-allowed-list': null,
  'declaration-property-value-disallowed-list': null,
  'declaration-property-value-no-unknown': true,
  'font-family-name-quotes': 'always-unless-keyword',
  'font-family-no-duplicate-names': true,
  'font-family-no-missing-generic-family-keyword': true,
  'font-weight-notation': 'numeric',
  'function-allowed-list': null,
  'function-calc-no-unspaced-operator': true,
  'function-comma-newline-after': 'always-multi-line',
  'function-comma-newline-before': 'never-multi-line',
  'function-comma-space-after': 'always-single-line',
  'function-comma-space-before': 'never',
  'function-disallowed-list': null,
  'function-linear-gradient-no-nonstandard-direction': true,
  'function-max-empty-lines': 0,
  'function-name-case': null,
  'function-no-unknown': null,
  'function-parentheses-newline-inside': null,
  'function-parentheses-space-inside': 'never-single-line',
  'function-url-no-scheme-relative': null,
  'function-url-quotes': 'always',
  'function-url-scheme-allowed-list': null,
  'function-url-scheme-disallowed-list': null,
  'function-whitespace-after': 'always',
  'hue-degree-notation': null,
  'import-notation': null,
  indentation: [
    2,
    {
      ignore: ['inside-parens'],
    },
  ],
  'keyframe-block-no-duplicate-selectors': true,
  'keyframe-declaration-no-important': true,
  'keyframes-name-pattern': null,
  'keyframe-selector-notation': null,
  'length-zero-no-unit': [
    true,
    {
      ignore: 'custom-properties',
    },
  ],
  linebreaks: null,
  'max-empty-lines': 1,
  'max-line-length': null,
  'max-nesting-depth': null,
  'media-feature-colon-space-after': 'always',
  'media-feature-colon-space-before': 'never',
  'media-feature-name-allowed-list': null,
  'media-feature-name-case': 'lower',
  'media-feature-name-disallowed-list': null,
  'media-feature-name-no-unknown': true,
  'media-feature-name-no-vendor-prefix': true,
  'media-feature-name-value-allowed-list': null,
  'media-feature-name-unit-allowed-list': null,
  'media-feature-parentheses-space-inside': 'never',
  'media-feature-range-notation': null,
  'media-feature-range-operator-space-after': 'always',
  'media-feature-range-operator-space-before': 'always',
  'media-query-list-comma-newline-after': 'always-multi-line',
  'media-query-list-comma-newline-before': 'never-multi-line',
  'media-query-list-comma-space-after': 'always-single-line',
  'media-query-list-comma-space-before': 'never-single-line',
  'named-grid-areas-no-invalid': true,
  'no-descending-specificity': null,
  'no-duplicate-at-import-rules': true,
  'no-duplicate-selectors': true,
  'no-empty-first-line': null,
  'no-empty-source': true,
  'no-eol-whitespace': true,
  'no-extra-semicolons': true,
  'no-invalid-double-slash-comments': true,
  'no-invalid-position-at-import-rule': true,
  'no-irregular-whitespace': true,
  'no-missing-end-of-source-newline': true,
  'no-unknown-animations': null,
  'number-leading-zero': 'always',
  'number-max-precision': null,
  'number-no-trailing-zeros': true,
  'property-allowed-list': null,
  'property-case': 'lower',
  'property-disallowed-list': null,
  'property-no-unknown': null,
  'property-no-vendor-prefix': true,
  'rule-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['after-comment'],
    },
  ],
  'rule-selector-property-disallowed-list': null,
  'selector-attribute-brackets-space-inside': 'never',
  'selector-attribute-name-disallowed-list': null,
  'selector-attribute-operator-allowed-list': null,
  'selector-attribute-operator-disallowed-list': null,
  'selector-attribute-operator-space-after': 'never',
  'selector-attribute-operator-space-before': 'never',
  'selector-attribute-quotes': 'always',
  'selector-class-pattern': null,
  'selector-combinator-allowed-list': null,
  'selector-combinator-disallowed-list': null,
  'selector-combinator-space-after': 'always',
  'selector-combinator-space-before': 'always',
  'selector-descendant-combinator-no-non-space': true,
  'selector-disallowed-list': null,
  'selector-id-pattern': null,
  'selector-list-comma-newline-after': 'always',
  'selector-list-comma-newline-before': 'never-multi-line',
  'selector-list-comma-space-after': 'always-single-line',
  'selector-list-comma-space-before': 'never',
  'selector-max-attribute': null,
  'selector-max-class': null,
  'selector-max-combinators': null,
  'selector-max-compound-selectors': null,
  'selector-max-empty-lines': 0,
  'selector-max-id': 0,
  'selector-max-pseudo-class': null,
  'selector-max-specificity': null,
  'selector-max-type': null,
  'selector-max-universal': null,
  'selector-nested-pattern': null,
  'selector-no-qualifying-type': null,
  'selector-no-vendor-prefix': null,
  'selector-not-notation': null,
  'selector-pseudo-class-allowed-list': null,
  'selector-pseudo-class-case': 'lower',
  'selector-pseudo-class-disallowed-list': null,
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: ['global', 'local'],
    },
  ],
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'selector-pseudo-element-allowed-list': null,
  'selector-pseudo-element-case': 'lower',
  'selector-pseudo-element-colon-notation': 'double',
  'selector-pseudo-element-disallowed-list': null,
  'selector-pseudo-element-no-unknown': true,
  'selector-type-case': 'lower',
  'selector-type-no-unknown': true,
  'shorthand-property-no-redundant-values': null,
  'string-no-newline': true,
  'string-quotes': 'double',
  'time-min-milliseconds': null,
  'unicode-bom': null,
  'unit-allowed-list': null,
  'unit-case': 'lower',
  'unit-disallowed-list': null,
  'unit-no-unknown': true,
  'value-keyword-case': [
    'lower',
    {
      ignoreProperties: ['composes'],
    },
  ],
  'value-list-comma-newline-after': 'always-multi-line',
  'value-list-comma-newline-before': 'never-multi-line',
  'value-list-comma-space-after': 'always-single-line',
  'value-list-comma-space-before': 'never',
  'value-list-max-empty-lines': 0,
  'value-no-vendor-prefix': true,
};
