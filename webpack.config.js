const { assert } = require('console');
const path = require('path'); // подключение пакета
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');//загрузка содержимого кода в константу

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js/, // обрабытывать все файлы js
                exclude: /node_modules/, // исключение для обработчика
                loader: 'babel-loader'
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css/,
                use: [ // загрузчики указываются в обратном порядке
                    MiniCSSExtractPlugin.loader, 
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // путь к файлу шаблону
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        })
    ]
}