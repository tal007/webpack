module.exports = {
    entry: {
        app: "./index.js",
        module1: "./js/module1.js"
    },
    output: {
        path: __dirname + "/public/[hash]",
        filename: "[name].js"
    }
}