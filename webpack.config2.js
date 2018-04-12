const webpack              = require('webpack');
const merge                = require('webpack-merge');
const WebpackPluginCopy    = require('webpack-plugin-copy');
const WebpackCleanPlugin   = require('webpack-clean-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path                 = require('path');

const devserver         = require('./webpack/devserver');
const sass              = require('./webpack/sass');
const css               = require('./webpack/css');
const extractCSS        = require('./webpack/css.extract');
const uglifyJS          = require('./webpack/js.uglify');
const images            = require('./webpack/images');
const js                = require('./webpack/js');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
    public: path.join(__dirname, 'public')
};

const common = merge([
  {  
        entry: {
            'index': PATHS.src + '/index.js',
        },

        output: {
          path: PATHS.build,
          filename: './js/bundle.js'
        },

        plugins: [
            new WebpackCleanPlugin({
                on: "emit",
                path: ['./static', './build']
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new WebpackPluginCopy([
                { from: PATHS.public, to: PATHS.build },
            ]),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
        ],

        devtool: 'cheap-module-eval-source-map',

        resolve: {
          extensions: ['.js', '.jsx'],
        }
    },
    images(),
    js()
])

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(path.join(__dirname, "public")),
            sass(),
            css(),
        ]);
    }
}
