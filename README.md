# Yialo's Stylelint configuration

## Installation

```shell
npm install -DE stylelint-config-yialo
```

```shell
yarn add stylelint-config-yialo -DE
```

## Usage

This package contains three different rulesets for [Stylelint](https://github.com/stylelint/stylelint):

* `base`: for plain CSS and CSS Modules
* `scss`: for SCSS syntax only

If you've installed `stylelint-config-yialo` locally within your project, declare your stylelint config extension. Example of full ruleset usage:

```yaml
---
extends:
  - stylelint-config-yialo/base
  - stylelint-config-yialo/scss
```
