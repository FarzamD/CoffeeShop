const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
        directory: path.join(__dirname, 'public')
        },
        compress: true,
        port: 8080,
        historyApiFallback: true
    },
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
            },
        }, {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
        },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
