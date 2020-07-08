module.exports = {
    entry: './src/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: [ '@babel/preset-env' ],
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.(jpg|jpeg|png|gif|cur|ico|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: "assets/[name].[ext]"
                    }
                }]
            }
        ]
    },
    externals: [
        "reveal.js",
        /^reveal.js\/.+$/,
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
        library: 'slides',
        libraryTarget: 'umd'
    }
};
