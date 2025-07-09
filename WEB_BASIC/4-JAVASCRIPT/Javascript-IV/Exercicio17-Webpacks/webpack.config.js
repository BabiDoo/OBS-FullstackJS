const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules:[
            {
            test:/\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use: ['style-loader',
                'css-loader'
            ]
        }]
    }
};