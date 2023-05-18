const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV ?? 'development',
    entry: './src/entrypoint.jsx',
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            preset: [
                                "@babel/preset-env",
                                ["@babel/preset-react", { runtime: 'automatic' }]
                            ]
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.bundle.js',
    }
}