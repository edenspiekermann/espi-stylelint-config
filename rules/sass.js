module.exports = {
  plugins: ['stylelint-scss'],
  rules: {
    // Specify blacklist of disallowed file extensions for partial names in @import commands.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md
    'scss/at-import-partial-extension-blacklist': null,

    // Require or disallow an empty line before at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    'at-rule-empty-line-before': ['always', {
      ignore: [
        'after-comment',
        'first-nested',
        'blockless-after-same-name-blockless',
      ],
      ignoreAtRules: [
        'else if',
        'else',
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
