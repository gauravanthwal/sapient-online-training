# Webpack Configuration


``` 
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

// to run webpack
// webpack --config webpack.config.js 
```
