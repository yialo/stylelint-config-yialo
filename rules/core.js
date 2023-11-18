'use strict';

module.exports.rules = {
  'alpha-value-notation': null,
  'annotation-no-unknown': true,
  'at-rule-allowed-list': null,
  'at-rule-disallowed-list': null,
  'at-rule-empty-line-before': null,
  'at-rule-no-unknown': null,
  'at-rule-no-vendor-prefix': true,
  'at-rule-property-required-list': null,
  'block-no-empty': true,
  'color-function-notation': null,
  'color-hex-alpha': null,
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
  'declaration-block-single-line-max-declarations': null,
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
  'function-disallowed-list': null,
  'function-linear-gradient-no-nonstandard-direction': true,
  'function-name-case': null,
  'function-no-unknown': null,
  'function-url-no-scheme-relative': null,
  'function-url-quotes': 'always',
  'function-url-scheme-allowed-list': null,
  'function-url-scheme-disallowed-list': null,
  'hue-degree-notation': null,
  'import-notation': null,
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
  'max-nesting-depth': null,
  'media-feature-name-allowed-list': null,
  'media-feature-name-disallowed-list': null,
  'media-feature-name-no-unknown': true,
  'media-feature-name-value-no-unknown': null,
  'media-feature-name-no-vendor-prefix': true,
  'media-feature-name-value-allowed-list': null,
  'media-feature-name-unit-allowed-list': null,
  'media-feature-range-notation': null,
  'media-query-no-invalid': true,
  'named-grid-areas-no-invalid': true,
  'no-descending-specificity': null,
  'no-duplicate-at-import-rules': true,
  'no-duplicate-selectors': true,
  'no-empty-source': true,
  'no-invalid-double-slash-comments': true,
  'no-invalid-position-at-import-rule': true,
  'no-irregular-whitespace': true,
  'no-unknown-animations': null,
  'no-unknown-custom-properties': null,
  'number-max-precision': null,
  'property-allowed-list': null,
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
  'selector-anb-no-unmatchable': true,
  'selector-attribute-name-disallowed-list': null,
  'selector-attribute-operator-allowed-list': null,
  'selector-attribute-operator-disallowed-list': null,
  'selector-attribute-quotes': 'always',
  'selector-class-pattern': null,
  'selector-combinator-allowed-list': null,
  'selector-combinator-disallowed-list': null,
  'selector-disallowed-list': null,
  'selector-id-pattern': null,
  'selector-max-attribute': null,
  'selector-max-class': null,
  'selector-max-combinators': null,
  'selector-max-compound-selectors': null,
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
  'selector-pseudo-class-disallowed-list': null,
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: ['global', 'local'],
    },
  ],
  'selector-pseudo-element-allowed-list': null,
  'selector-pseudo-element-colon-notation': 'double',
  'selector-pseudo-element-disallowed-list': null,
  'selector-pseudo-element-no-unknown': true,
  'selector-type-case': 'lower',
  'selector-type-no-unknown': true,
  'shorthand-property-no-redundant-values': null,
  'string-no-newline': true,
  'time-min-milliseconds': null,
  'unit-allowed-list': null,
  'unit-disallowed-list': null,
  'unit-no-unknown': true,
  'value-keyword-case': [
    'lower',
    {
      ignoreProperties: ['composes'],
    },
  ],
  'value-no-vendor-prefix': true,
};
