module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-rational-order"],
  plugins: ["stylelint-order", "stylelint-config-rational-order/plugin"],
  rules: {
    /* Specify the alphabetical order of properties within declaration blocks. */
    /* https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-alphabetical-order */
    "order/properties-alphabetical-order": null,
    /* Specify the order of properties within declaration blocks. */
    /* https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-order */
    "order/properties-order": [],
    /*
       1. Positioning
       2. Box Model
       3. Typography
       4. Visual
       5. Animation
       6. Misc
    */
    /* https://www.npmjs.com/package/stylelint-config-rational-order */
    "plugin/rational-order": true,
    /* Require or disallow an empty line before the closing brace of blocks. */
    /* https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before */
    "block-closing-brace-empty-line-before": null,
    /* There must always be an empty line before at-rules. */
    /* https://stylelint.io/user-guide/rules/at-rule-empty-line-before */
    "rule-empty-line-before": "always",
    /* Require or disallow an empty line before declarations. */
    /* https://stylelint.io/user-guide/rules/declaration-empty-line-before */
    "declaration-empty-line-before": null,
    /* Disallow !important within declarations. */
    /* https://stylelint.io/user-guide/rules/declaration-no-important */
    "declaration-no-important": true,
    /* Disallow shorthand properties that override related longhand properties. */
    /* https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides */
    "declaration-block-no-shorthand-property-overrides": true,
    /* Specify whether or not quotation marks should be used around font family names. */
    /* Quotes are recommended in the spec with "font family names that contain white space, digits, or punctuation characters other than hyphens". */
    /* https://stylelint.io/user-guide/rules/font-family-name-quotes */
    "font-family-name-quotes": "always-where-recommended",
    /* Require (where possible) or disallow named colors. */
    /* https://stylelint.io/user-guide/rules/color-named */
    "color-named": "always-where-possible",
    /* Require or disallow an empty line before comments. */
    /* https://stylelint.io/user-guide/rules/comment-empty-line-before */
    "comment-empty-line-before": null,
    /* There must always be whitespace inside the markers. */
    /* https://stylelint.io/user-guide/rules/comment-whitespace-inside */
    "comment-whitespace-inside": "always",
    /* Urls must always be quoted. */
    /* https://stylelint.io/user-guide/rules/function-url-quotes */
    "function-url-quotes": "always",
    /* Strings must always be wrapped with single quotes. */
    /* https://stylelint.io/user-guide/rules/string-quotes */
    "string-quotes": "single",
    /* Disallow duplicate selectors within a stylesheet. */
    /* https://stylelint.io/user-guide/rules/no-duplicate-selectors */
    "no-duplicate-selectors": true,
    /* Limit the number of decimal places allowed in numbers. */
    /* https://stylelint.io/user-guide/rules/number-max-precision */
    "number-max-precision": 2,
    /* Disallow trailing zeros in numbers. */
    /* https://stylelint.io/user-guide/rules/number-no-trailing-zeros */
    "number-no-trailing-zeros": true,
    /* Require or disallow a leading zero for fractional numbers less than 1. */
    /* https://stylelint.io/user-guide/rules/number-leading-zero */
    "number-leading-zero": "never",
    /* Disallow redundant values in shorthand properties. (e.g. margin / padding) */
    /* https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values */
    "shorthand-property-no-redundant-values": true,
    /* Disallow qualifying a selector by type. Allow attribute selectors qualified by type. */
    /* https://stylelint.io/user-guide/rules/selector-no-qualifying-type */
    "selector-no-qualifying-type": [true, { ignore: "attribute" }],
    /* Require a newline or disallow whitespace after the commas of selector lists. */
    /* https://stylelint.io/user-guide/rules/selector-list-comma-newline-after */
    "selector-list-comma-newline-after": null,
    /* Limit the number of ID selectors in a selector */
    /* https://stylelint.io/user-guide/rules/selector-max-id */
    "selector-max-id": 0,
    /* Limit the number of universal selectors in a selector. */
    /* https://stylelint.io/user-guide/rules/selector-max-universal */
    "selector-max-universal": 0,
    /* Disallow vendor prefixes for selectors. */
    /* https://stylelint.io/user-guide/rules/selector-no-vendor-prefix */
    "selector-no-vendor-prefix": true,
    /* Disallow vendor prefixes for properties. */
    /* https://stylelint.io/user-guide/rules/property-no-vendor-prefix */
    "property-no-vendor-prefix": true,
    /* Specify lowercase or uppercase for media feature names. */
    /* https://stylelint.io/user-guide/rules/media-feature-name-case */
    "media-feature-name-case": "lower",
    /* Specify lowercase or uppercase for keywords values. */
    /* https://stylelint.io/user-guide/rules/value-keyword-case */
    "value-keyword-case": "lower",
    /* Disallow extra semicolons. */
    /* https://stylelint.io/user-guide/rules/no-extra-semicolons */
    "no-extra-semicolons": true,
  },
  ignoreFiles: ["./.cache/**/*", "./node_modules/**/*", "./public/**/*"],
};
