module.exports = {
  extends: [
    "stylelint-config-prettier",
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-recess-order"
  ],
  plugins: ["stylelint-scss", "stylelint-selector-bem-pattern"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-blockless", "inside-block"]
      }
    ],
    "at-rule-no-unknown": null,
    "color-no-hex": true,
    "max-nesting-depth": 4,
    "rule-empty-line-before": ["always", { except: ["inside-block"] }],
    "selector-max-id": 1,
    "value-keyword-case": ["lower", { ignoreProperties: ["/^\\$/"] }],
    "order/properties-alphabetical-order": null,
    "selector-class-pattern": null,
    "scss/at-rule-no-unknown": true,
    "plugin/selector-bem-pattern": {
      "componentName": "[A-Z]+",
      "componentSelectors": {
        "initial": "^\\.{componentName}(?:-[a-z]+)?$",
        "combined": "^\\.combined-{componentName}-[a-z]+$"
      },
      "utilitySelectors": "^\\.util-[a-z]+$"
    }
  }
}
