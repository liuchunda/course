const {build} =require("esbuild")
const path = require("path")
const {resolve} =require("path")
const target = 'reactivity'
// node 不支持
build({
  entryPoints:[resolve(__dirname,`../packages/${target}/src/index.ts`)],
  outfile:resolve(__dirname,`../packages/${target}/dist/${target}.js`),
  bundle:true,//将依赖的模块也打包进去
  sourcemap:true,
  format:'esm',//打包出来的是esm se6模块
  platform:'browser',
  // watch:true
  watch:{
    onRebuild(){
      console.log('rebuild~~~')
    }
  }
}).then(()=>{
  console.log('watching~~~')
})

