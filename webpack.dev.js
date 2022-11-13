const {merge} = require("webpack-merge");
const config = require("./webpack.config");

module.exports = () => {
    return merge({
        mode: "development",
        devtool: "cheap-module-source-map"
    }, config())
}