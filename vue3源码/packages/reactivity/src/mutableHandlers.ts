import { ReactiveFlags, reactive } from './reactive'
import { track, trigger } from './effect'
import { isObject } from '@vue/shared'
export const mutableHandler = {
  get(target, key, receiver) {
    console.log(key,6)
    if (key === ReactiveFlags.IS_REACTIVE) {
      console.log(target,7)
      return true
    }
    if (isObject(target[key])) {
      return reactive(target[key])
    }
    track(target, key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    let oldValue = target[key]
    let r = Reflect.set(target, key, value, receiver)
    if (oldValue !== value) {
      trigger(target, key)
    }
    return r
  }
}

