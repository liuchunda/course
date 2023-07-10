import hasOwnProperty from 'shared/hasOwnProperty'
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'
function hasValidKey (config) {
  return config.key !== undefined
}
function hasValidRef (config) {
  return config.ref !== undefined
}
const RESERVED_PROPS = {
  key: true,
  ref: true,
  _self: true,
  _source: true
}
function ReactElement (type, key, ref, props) {
  return {//这就是一个react元素，就是一个虚拟dom
    $$typeOf: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props
  }
}
export function jsxDEV (type, config) {
  let propName;//属性名
  let props = {}//属性对象
  let key = null;//每个虚拟dom可以有一个可选择的key属性，用来区分一个父亲节点下的不用子节点
  let ref = null;//引入，后边可以通过这视线获取真实的DOM的需求
  if (hasValidKey(config)) {
    key = config.key
  }
  if (hasValidRef(config)) {
    ref = config.ref
  }
  for (propName in config) {
    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty[propName]) {
      props[propName] = config[propName]
    }
  }
  return ReactElement(type, key, ref, props)
}