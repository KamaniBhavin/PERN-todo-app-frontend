const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = () => {
    return {
        entry: {
            index: "/src/index.tsx"
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"]
        },
        output: {
            filename: "[name].bundle.js",
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "[name].html",
                template: "./src/static/template.html",
            }),
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false
            })
        ]
    }
}