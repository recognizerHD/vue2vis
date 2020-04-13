import externals from "rollup-plugin-node-externals";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";
import vue from "rollup-plugin-vue";

export default [
  {
    input: "./lib/index.js",
    output: {
      format: "esm",
      file: "dist/network.esm.js"
    },
    plugins: [
      externals({
        exclude: [
          "vis-util/esnext",
          "component-emitter",
          "timsort",
          "@egjs/hammerjs",
          "keycharm",
          "uuid"
        ]
      }),
      nodePolyfills(),
      resolve({ browser: true }),
      commonjs({
        namedExports: {
          timsort: ["sort"]
        }
      }),
      vue()
    ]
  },
  {
    input: "./lib/index.js",
    output: {
      format: "cjs",
      file: "dist/network.cjs.js"
    },
    plugins: [
      externals({
        exclude: [
          "vis-util/esnext",
          "component-emitter",
          "timsort",
          "@egjs/hammerjs",
          "keycharm",
          "uuid"
        ]
      }),
      nodePolyfills(),
      resolve({ browser: true }),
      commonjs({
        namedExports: {
          timsort: ["sort"]
        }
      }),
      vue()
    ]
  }
];
