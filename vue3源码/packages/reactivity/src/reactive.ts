import { isObject } from "@vue/shared";
import { mutableHandler } from './mutableHandlers'
// export import { watch } from './apiWatch.ts'
export const enum ReactiveFlags {
  IS_REACTIVE = '_v_isReactive'
}
const reactiveMap = new WeakMap()

export function reactive(target) {
  if (!isObject(target)) return target

  let existingProxy = reactiveMap.get(target)
  if (existingProxy) return existingProxy //如果被代理过返回

  if (target[ReactiveFlags.IS_REACTIVE]) {//如果是state直接返回state
    // 1）vue3.0的时候，会创造一个反响映射，代理的结果，对应原内容
    // 2）目前不用创建反向映射表，用的方式是，如果这个对象被代理过了，已经被拦截过了
    return target
  }


  const proxy = new Proxy(target, mutableHandler)

  reactiveMap.set(target, proxy)

  return proxy
}

export function isReactive(targer) {
  return targer[ReactiveFlags.IS_REACTIVE]
}
