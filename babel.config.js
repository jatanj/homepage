module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: "defaults",
      useBuiltIns: "usage",
      corejs: { version: "3.9", proposals: true }
    }],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
}
