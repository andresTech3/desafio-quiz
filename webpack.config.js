const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyPlugin = require('copy-webpack-plugin');
const CssMinimizerPLugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        publicPath : "/"
    },
    mode : 'production',
    resolve : {
        extensions : ['.js', '.jsx'],
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : '/node_modules/',
                use:{
                        loader : 'babel-loader'
                }
            },
            {
                test : /\.html$/,
                use:[
                    {
                        loader : 'html-loader'
                    }
                ],
            },
            {
                test : /\.(css|scss)$/,
                use : [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(jpg|png|svg)$/,
                use:['url-loader'],
            }
        ]
    },
    devServer:{
        static : {
            directory : path.join(__dirname,'dist')
        },
        compress : true,
        historyApiFallback : true, 
        port : 3008
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : './public/index.html',
            filename : './index.html'
        }),
        new MiniCssExtractPlugin({
            filename : '[name].css'
        }),
        new copyPlugin({
            patterns : [
                {
                    from: path.resolve(__dirname,"src","assets/image"),
                    to : "assets/images"
                }
            ]
        }),
        new CleanWebpackPlugin()
    ],
    optimization : {
        minimize : true,
        minimizer: [
            new CssMinimizerPLugin(),
            new TerserPlugin(),
        ]
    }
}