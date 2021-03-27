module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint',
        ecmaVersion: 6
    },
    plugins: [
        'vue',
        'html'
    ],
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],
    rules: {
        'no-alert': 2,
        'arrow-spacing': 2, // =>的前/后括号
        'space-before-function-paren': 2,
        'brace-style': [1, '1tbs'], // 大括号风格
        'comma-spacing': 2, // 逗号前后的空格
        indent: [2, 4], // 缩进风格
        'object-curly-spacing': [2, 'never'], // 大括号内是否允许不必要的空格
        'padded-blocks': 2, // 块语句内行首行尾是否要空行
        semi: [2, 'never'], // 语句强制不用分号结尾
        quotes: [2, 'single'] // 引号类型 `` "" ''
    }
}
