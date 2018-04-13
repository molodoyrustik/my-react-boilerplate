const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = function() {
    return {
        plugins: [
            new OpenBrowserPlugin({ url: 'http://localhost:3000' })
        ],
        devtool: 'cheap-module-eval-source-map'
    };
};
