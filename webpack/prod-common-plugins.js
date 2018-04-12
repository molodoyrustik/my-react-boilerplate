const WebpackPluginCopy    = require('webpack-plugin-copy');
const WebpackCleanPlugin   = require('webpack-clean-plugin');


module.exports = function(PATHS, pathRootDir) {
    return {
        plugins: [
            new WebpackCleanPlugin({
                on: "emit",
                path: ['./static', './build']
            }),
            new WebpackPluginCopy([
                { from: PATHS.public, to: PATHS.build },
            ]),
        ]
    };
};


