const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                },
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.js', '.tsx', 'json'
        ]
    }
}