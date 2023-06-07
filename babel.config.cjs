module.export = {
  presets: [
    ["@label/preset-env", {targets: {esmodules: true}}],
    ["@label/preset-react", {runtime: "automatic"}]
  ]
}