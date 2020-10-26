# Edenspiekermann STYLELINT Configuration

This repository contains the STYLELINT configuration for projects at [Edenspiekermann](https://www.edenspiekermann.com/).

## Installation

Install this package, and save it as a devDependency:

```
yarn add @edenspiekermann/stylelint-config --dev
```

Then have your project's `.stylelintrc` file extend the ruleset.

```json
{
  "extends": ["@edenspiekermann/stylelint-config"]
}
```

### Core rules

Using `"extends": ["@edenspiekermann/stylelint-config"]` is a short hand for `"extends": ["@edenspiekermann/stylelint-config/rules/core"]`. The core rules use extend the stylelint-config-standard configuration. It contains all rulesets for a _frameworkless_ / _vanilla css_ validation. On top of that its possible to extend these rules with some more specific configurations (see the following).


### BEM

Add this configuration if you want to use stylelint with the rules of [BEM](http://getbem.com/introduction/).

```json
{
  "extends": [
    "@edenspiekermann/stylelint-config",
    "@edenspiekermann/stylelint-config/rules/bem"
  ]
}
```

### SASS

Add this configuration if you want to use stylelint with the rules of [SASS](https://sass-lang.com/).

```json
{
  "extends": [
    "@edenspiekermann/stylelint-config",
    "@edenspiekermann/stylelint-config/rules/sass"
  ]
}
```

### Styled components

Add this configuration if you want to use stylelint with the rules of [styled components](https://styled-components.com/).

```json
{
  "extends": [
    "@edenspiekermann/stylelint-config",
    "@edenspiekermann/stylelint-config/rules/styled-components"
  ]
}
```

### Tailwind

Add this configuration if you want to use stylelint with the rules of [tailwind](https://tailwindcss.com/).

```json
{
  "extends": [
    "@edenspiekermann/stylelint-config",
    "@edenspiekermann/stylelint-config/rules/styled-components"
  ]
}
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
