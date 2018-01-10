// 引入插件
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test:/.css$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new HTMLWebpackPlugin({
        //     template: "./template/index.html"
        // })
    ]
}
