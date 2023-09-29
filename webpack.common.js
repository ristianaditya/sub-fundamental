const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "main.js",
        clean: true,
    },
    module : {
        rules : [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], 
            },
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename : "index.html",
        }),
    ],
    resolve : {
        extensions: [".js"],
    },
}