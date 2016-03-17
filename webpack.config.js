module.exports = {
    entry: './src/client/app.module.js',
    output: {
        filename: './build/bandle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'babel?presets[]=es2015!es6-template-string'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: [
                        'transform-es3-member-expression-literals',
                        'transform-es3-property-literals'
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6', '.html']
    }
};