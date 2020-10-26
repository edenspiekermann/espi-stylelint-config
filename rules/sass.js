module.exports = {
  plugins: ['stylelint-scss'],
  rules: {
    // Specify blacklist of disallowed file extensions for partial names in @import commands.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md
    'scss/at-import-partial-extension-blacklist': null,
  },
};
