module.exports = {
  processors: [
    'stylelint-processor-styled-components',
    'stylelint-config-rational-order',
  ],
  extends: [
    '@edenspiekermann/stylelint-config',
    '@edenspiekermann/stylelint-config/rules/sass',
    '@edenspiekermann/stylelint-config/rules/styled-components',
  ],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    // Specify the alphabetical order of properties within declaration blocks.
    // https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-alphabetical-order
    'order/properties-alphabetical-order': null,

    // Specify the order of properties within declaration blocks.
    // https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-order
    'order/properties-order': [],
    /*
       1. Positioning
       2. Box Model
       3. Typography
       4. Visual
       5. Animation
       6. Misc
    */
    // https://www.npmjs.com/package/stylelint-config-rational-order
    'plugin/rational-order': true,

    // Disallow unknown at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    'at-rule-no-unknown': [null],

    // Specify lowercase or uppercase for hex colors.
    // https://stylelint.io/user-guide/rules/color-hex-case
    'color-hex-case': 'lower',

    // Specify short or long notation for hex colors.
    // https://stylelint.io/user-guide/rules/color-hex-length
    'color-hex-length': 'long',

    // Limit the depth of nesting.
    // https://stylelint.io/user-guide/rules/max-nesting-depth
    'max-nesting-depth': 3,

    // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    // https://stylelint.io/user-guide/rules/function-parentheses-space-inside
    'function-parentheses-space-inside': null,

    // Specify a pattern for class selectors.
    // https://stylelint.io/user-guide/rules/selector-class-pattern
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
  },
};
