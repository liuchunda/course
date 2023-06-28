// watch api 用法很多，常见的写法就是监控一个函数的返回值，根据返回值的变化触发对应的函数

import { isFunction, isObject } from "@vue/shared";
import { ReactiveEffect } from "./effect";
import { isReactive } from "./reactive";

function traverse(value, seen = new Set()) {
  if (!isObject(value)) {
    return value
  }
  if (seen.has(value)) {
    return value
  }
  seen.add(value)
  for (const key in value) {
    traverse(value[key], seen)
  }
  return value
}




export function watch(source, cb, options) {
  return dowwatch(source, cb, options)
}

export function watchEffect(source, options) {
  return dowwatch(source, null, options)
}

// watch可以传一个响应式对象，可以监控对象的变化
export function dowwatch(source, cb, options: any = {}) {
  // 1)source是一个响应式对象
  // 2）source是一个函数
  let getter;
  if (isReactive(source)) {
    getter = () => traverse(source)
  } else if (isFunction(source)) {
    // effect+scheduler
    getter = source
  }
  let oldValue;

  let clear;
  function onCleanUP(fn){
    clear = fn
  }
  const job = () => {
    if (cb) {
      if(clear){//执行的时候，把上次的清理函数执行
        clear()
      }
      const newValue = effect.run()
      cb(newValue, oldValue,onCleanUP);
      oldValue = newValue
    } else {
      effect.run()
    }
  }
  const effect = new ReactiveEffect(getter, job)
  oldValue = effect.run();
  // console.log(oldValue,39)
  // effect(getter,{scheduler:cb}) 
}