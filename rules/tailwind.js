module.exports = {
  rules: {
    // Disallow unknown at-rules in favour of scss/at-rule-no-unknown.
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    'at-rule-no-unknown': null,

    // Disallow unknown at-rules in sass files.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-rule-no-unknown
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'responsive',
          'variants',
          'screen',
        ],
      },
    ],
  },
};
