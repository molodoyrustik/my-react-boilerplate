module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include: paths,
                    use: [
                        'style-loader', //css-loader добавляет CSS-модули в граф зависимостей;
                        'css-loader' //style-loader добавляет стили в DOM-дерево при помощи тега ˂style˃.
                    ]
                }
            ]
        }
    };
};