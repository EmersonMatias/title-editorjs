import path from "path";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default {
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      name: "H1Tool",
      fileName: "index"
    }
  },
  plugins: [
    cssInjectedByJsPlugin(),
  ]
};

//Invalid value "mjs" for option "output.format" - Valid values are "amd", "cjs", "system", "es", "iife" or "umd".