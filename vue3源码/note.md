## 虚拟dom 可以实现跨平台。操作dom时，只操作虚拟dom，更新完以后，比较虚拟dom，防止频繁操作dom

## 编译时，运行时
# 编译时：将模版编译成虚拟dom js，构建时
# 运行时：把js放在浏览器中运行 

# vue 管理工具
pnpm 
npm pnpm install -g
自带monorepo

pnpm 会把包放在.pnpm下，如果想都放在node_modules下,可以在packages下建一个.npmrc文件,在文件中添加配置```shamefully-hoist = true```
pnpm：当a引入b，b引入c时，安装a，那么直接引入b是拿不到的，因为依赖的包在.pnpm下。通过shamefully-hoist = true可以把包都提出来，从而可以直接引用到

## ts
## 安装typescript  
```npm install typescript -g ```


### esbuild
默认支持把ts打包成js

### Live Server 启服务用的

## vue发布订阅的缺点，比较乱，消息传输不明确

### Proxy
Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）