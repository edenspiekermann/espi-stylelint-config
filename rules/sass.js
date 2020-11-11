module.exports = {
  plugins: ['stylelint-scss'],
  rules: {
    // Disallow unknown at-rules in favour of scss/at-rule-no-unknown.
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    'at-rule-no-unknown': null,

    // Disallow unknown at-rules in sass files.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-rule-no-unknown
    'scss/at-rule-no-unknown': true,

    // Specify blacklist of disallowed file extensions for partial names in @import commands.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md
    'scss/at-import-partial-extension-blacklist': null,

    // Require or disallow an empty line before at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
        'blockless-after-blockless',
        'first-nested',
      ],
      ignore: [
        'after-comment',
      ],
      ignoreAtRules: [
        'if',
        'else if',
        'else',
        'return',
      ],
    }],

    // Require a newline or disallow whitespace after the closing brace of blocks.
    // https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: [
        'if',
        'else if',
        'else',
      ],
    }],
  },
};
