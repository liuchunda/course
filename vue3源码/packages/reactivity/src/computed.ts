import { isFunction } from "@vue/shared";
import { ReactiveEffect, activeEffect, trackEffect, triggerEffect } from "./effect";

class ComputedRefImpl {
  public effect;
  public _value;
  public _dirty = true;
  public dep = new Set()
  constructor(getter, public setter) {
    this.effect = new ReactiveEffect(getter, () => {
      // console.log(123123)
      if (!this._dirty) {
        this._dirty = true
        triggerEffect(this.dep)
        // 当依赖发生变化，计算属性的effect需要触发更新
      }
    })
  }
  get value() {
    // 在取值的时候，要对计算属性做依赖收集
    //如果计算属性是在effect中使用的要做依赖收集
    // if(activeEffect){
    trackEffect(this.dep)
    // }
    if (this._dirty) {
      this._dirty = false
      this._value = this.effect.run()//this._value就是取值后的结果
    }
    return this._value
  }
  set value(newVal) {
    this.setter(newVal)
  }
}

export function computed(getterOrOptions) {
  let getter;
  let setter;
  console.log(getterOrOptions, 6)
  const isGetter = isFunction(getterOrOptions)
  if (isGetter) {
    getter = getterOrOptions
    setter = () => {
      console.log('warn')
    }
  } else {
    getter = getterOrOptions.get
    setter = getterOrOptions.set
  }
  return new ComputedRefImpl(getter, setter)
} 