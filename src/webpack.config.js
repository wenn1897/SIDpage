const HTMLWebpackPlugin  = require('html-webpack-plugin');


module.exports =
 {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.json$/i,
                loader: 'json-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
    })
    ],
    mode: 'development'
 }