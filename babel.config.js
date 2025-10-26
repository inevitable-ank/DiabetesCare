module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
        importSource: "react",
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-react-jsx",
  ],
};

