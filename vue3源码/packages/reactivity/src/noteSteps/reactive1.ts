import { isObject } from "@vue/shared";
export const mutableHandler = {
  get(
    target,//原对象
    key,//属性
    receiver//代理对象（代理proxy）
    // 在使用proxy的时候，要搭配reflect来使用，用来解决this问题
  ) {
    return Reflect.get(target, key, receiver)//如果目标对象中指定了getter，receiver则为getter调用时的this值
  },
  set(target, key, value, receiver) {
    return Reflect.set(target, key, value, receiver)//如果目标对象中指定了setter，receiver则为setter调用时的this值
  }
}
export function reactive(value) {
  if (!isObject(value)) return value
  const proxy = new Proxy(value, mutableHandler)
  return proxy
}