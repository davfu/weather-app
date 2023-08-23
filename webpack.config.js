const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images', // This is the directory in dist where images will be copied
                        },
                    },
                ],
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
