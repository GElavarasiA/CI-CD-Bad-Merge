const js = require("@eslint/js");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                test: "readonly",
                expect: "readonly"
            }
        },
        rules: {
            ...js.configs.recommended.rules
        }
    }
];