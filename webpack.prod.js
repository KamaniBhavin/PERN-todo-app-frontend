const {merge} = require("webpack-merge");
const config = require("./webpack.config");

module.exports = () => {
    return merge({
        mode: "production",
        optimization: {
            splitChunks: {
                chunks: "all"
            }
        }
    }, config())
}