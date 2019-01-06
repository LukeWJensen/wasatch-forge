module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": "off", //delegate this to editorconfig instead
        "vue/html-indent": [
            "error",
            4
        ],
        "vue/max-attributes-per-line": [
            2,
            {
                "singleline": 2
            }
        ],
        "vue/html-closing-bracket-newline": [
            "error",
            {
                "singleline": "never",
                "multiline": "always"
            }
        ],
        "vue/html-closing-bracket-spacing": ["error", {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "never"
        }],
        "vue/name-property-casing": [
            "error",
            "PascalCase"
        ],
        "vue/prop-name-casing": [
            "error",
            "camelCase"
        ],
        "vue/require-default-prop": [
            "off"
        ],
        "vue/no-v-html": [
            "off"
        ],
        "vue/script-indent": ["warn", 4, {
            "baseIndent": 1
        }]
    }
}
