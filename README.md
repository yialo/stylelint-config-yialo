# Yialo's Stylelint configuration

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
  
Notice that this package requires next ones as peer dependencies:

* [stylelint](https://www.npmjs.com/package/stylelint)
* [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)

You may install them quickly with this command:

* npm

  ```shell
  npm install -DE stylelint stylelint-scss
  ```

* yarn

  ```shell
  yarn add stylelint stylelint-scss -DE
  ```

Command for quick removal of them:

* npm

  ```shell
  npm uninstall -D stylelint stylelint-scss
  ```

* yarn

  ```shell
  yarn remove stylelint stylelint-scss -D
  ```
