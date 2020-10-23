module.exports = {
  extends: [
    '@edenspiekermann/stylelint-config/rules/bem',
  ],
  rules: {
    // Specify a pattern for class selectors.
    // https://stylelint.io/user-guide/rules/selector-class-pattern
    'selector-class-pattern':
      '^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
  },
};
