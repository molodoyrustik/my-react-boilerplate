module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: [/\.js$/, /\.jsx$/],
                    include: paths,
                    loader: 'babel-loader'
                }
            ]
        }
    };
};