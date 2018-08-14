const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        memes: './src/js/memes.js',
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].js',
    },
}