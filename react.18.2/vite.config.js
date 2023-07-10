import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require("path")
export default defineConfig({
  resolve: {
    alias: {
      react: path.posix.resolve("src/react"),
      "react-dom": path.posix.resolve("src/react-dom"),
      "react-reconciler": path.posix.resolve("src/react-reconciler"),
      scheduler: path.posix.resolve("src/scheduler"),
      shared: path.posix.resolve("src/shared")
    }
  },
  plugins: [
    react()
  ]
})

// const path = require("path")
// window和linux路径分隔符不一样
// path.delimiter
// window的delimiter是一个;
// linux的delimiter是一个:

// path.posix.delimiter 可以保证不同的系统返回值一样
