const path = require("path");
const webpack = require("webpack");
const tsLoaderConfigFileName = "./tsconfig.browser.json"

module.exports = {
    entry: {
        'milligrami-demo': './src/window.tsx',        
    },
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: '[name].js',
        // libraryTarget: 'umd',
        // library: 'Milligrami',
        // umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    devtool: 'source-map',
    plugins: [
      // ...
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                configFileName: tsLoaderConfigFileName
            }
        }],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "milligrami": "Milligrami"
    }
}