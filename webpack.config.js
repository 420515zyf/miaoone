const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|bmp)$/,
                loader: "url-loader",
                options: {
                    limit: 7631,
                    name: '[hash:8]-[name].[ext]',
                    outputPath: 'images/',
                    esModule: false
                }
            },
            {
                test: /\.html$/,
                loader: "html-withimg-loader",
                options: {
                    esModule: false
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: "url-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"
        })
    ],

    //引入vue方式：
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
}