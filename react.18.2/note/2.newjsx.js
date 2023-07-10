// 在react17之前，babel转换是老的写法
const babel = require("@babel/core")
const sourceCode = `
<h1>
hello <span str="1" style={{ color: 'red' }}>world</span> 111
</h1>
`
const result = babel.transform(sourceCode, {
  plugins: [
    ["@babel/plugin-transform-react-jsx", { runtime: 'automatic' }]
  ]
})
console.log(result.code)

// 运行前babel把上述jsx代码编译成了下边的js代码，下边的js代码在浏览器中运行，生成虚拟dom（一个js对象）

// 生成环境时编译成这个
var _reactJsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/_reactJsxRuntime.jsxs("h1", {
  children: ["hello ", /*#__PURE__*/_reactJsxRuntime.jsx("span", {
    str: "1",
    id: "12",
    class: "123 1",
    style: {
      color: 'red'
    },
    children: "world"
  })]
});

// 开发环境时会编译成：
// import { jsxDEV } from "react/jsx-dev-runtime";
//    |                          ^
// 2  |  console.log("main");
// 3  |  let element = /* @__PURE__ */ jsxDEV("h1", { children: [


//新版本会自动引入 var _reactJsxRuntime = require("react/jsx-runtime");
// 所以不用再手动引入了import React from 'react'
