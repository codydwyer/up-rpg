process.env.BABEL_ENV = "test";
module.exports = {
  moduleDirectories: ["src", "node_modules"],
  rootDir: "./",
  setupFiles: ["<rootDir>/setup-jest.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$":
      "<rootDir>/fileTransformer.js"
  },
  globals: {
    NODE_ENV: "test"
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: ["/node_modules/"],
  verbose: true
};
