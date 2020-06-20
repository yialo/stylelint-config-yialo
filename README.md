# Yialo's Stylelint configuration

All-in-one package for linting styles. It includes these ones out-of-box:

* [stylelint](https://www.npmjs.com/package/stylelint)
* [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)

## Installation

```shell
npm install -DE stylelint-config-yialo
```

## Usage

This package contains three different rulesets for [Stylelint](https://github.com/stylelint/stylelint):

* `base`: for plain CSS and CSS Modules
* `scss`: for SCSS syntax only
* `full`: both of previous ones

If you've installed `stylelint-config-yialo` locally within your project, declare your stylelint config extension:

* For full ruleset use:

    ```json
    {
      "extends": "stylelint-config-yialo"
    }
    ```

* For base ruleset use:

    ```json
    {
      "extends": "stylelint-config-yialo/base"
    }
    ```

* For SCSS-only ruleset use:

    ```json
    {
      "extends": "stylelint-config-yialo/scss"
    }
    ```
