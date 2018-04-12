const path = require('path');

console.log(path.join(__dirname, "../public"));
module.exports = function(contentBase) {
    return {
        devServer: {
    		inline: true,
			contentBase: contentBase,
			compress: true,
			port:3000,
			watchContentBase: true,
			historyApiFallback: true
        }
    };
};