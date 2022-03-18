module.exports = {
    root: true,
    extends: ['eslint:recommended', '@react-native-community', 'prettier'],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['off'],
        'generator-star-spacing': 'off',
        'comma-dangle': 'off',
        'no-alert': 'off',
        'no-trailing-spaces': ['error', {skipBlankLines: true}],
        'eol-last': 0,
        'react-hooks/exhaustive-deps': 'warn',
        curly: 'off',
    },
};
