# Yialo's Stylelint configuration

## Installation

```shell
npm install -DE stylelint-config-yialo
```

```shell
yarn add stylelint-config-yialo -DE
```

```shell
pnpm add -DE stylelint-config-yialo
```

## Usage

This package contains three different rulesets for [Stylelint](https://github.com/stylelint/stylelint):

- `base`: for CSS only
- `scss`: for both CSS and SCSS

If you've installed `stylelint-config-yialo` locally within your project, declare your stylelint config extension. For example,

```yaml
---
extends:
  - stylelint-config-yialo/scss
```
