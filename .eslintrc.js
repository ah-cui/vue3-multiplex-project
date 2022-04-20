// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'，
        ecmaVersion: 6,
        sourceType:'script',

    },
    env: {
        'browser': true,
        'es6': true,
        'node': true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // 缩进
        indent: [
            error,
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        // 引号
        quotes: [
            1,
            'single'
        ],
        // 分号结尾
        semi: [
            'error',
            'always'
        ],
        'no-unused-vars': [2, {
            // 允许声明未使用变量
            vars: 'local',
            // 参数不检查
            args: 'none'
        }],
        // 最大空行100
        'no-multiple-empty-lines': [0, { max: 100 }],
        'no-mixed-spaces-and-tabs': [0],
        // 不能使用console
        'no-console': 'off',
        // 未定义变量不能使用
        'no-undef': 0,
        // 一行结束后面不要有空格
        'no-trailing-spaces': 1,
        // 强制驼峰法命名
        'camelcase': 2,
        // 对象字面量项尾不能有逗号
        'comma-dangle': [2, 'never'],
        // this别名
        'consistent-this': [2, 'that', '_this'],
    }
}
