export let activeEffect = null
let targetMap = new Map()

function cleanupEffect(effect) {
  let { deps } = effect
  for (let i = 0; i < deps.length; i++) {
    deps[i].delete(effect)
  }
  effect.deps.length = 0
}
export class ReactiveEffect {
  // private fn
  constructor(private fn, public scheduler?) {
    this.fn = fn
  }
  parent = undefined
  active = true
  deps = []
  run() {
    if (!this.active) {
      return this.fn()//不会触发收集   
    }
    try {
      this.parent = activeEffect
      activeEffect = this
      cleanupEffect(activeEffect)
      return this.fn()//会触发收集
    } finally {
      activeEffect = this.parent
      this.parent = undefined
    }
  }
  stop() {
    if (this.active) {
      this.active = false
      cleanupEffect(this)
    }
  }
}
export function effect(fn, options: any = {}) {
  const _effect = new ReactiveEffect(fn, options.scheduler)
  _effect.run()
  const runner = _effect.run.bind(_effect)
  //可以通过runner拿到effect中的所有属性
  runner.effect = _effect
  return runner
}

export function trackEffect(depSet) {
  let shouldTrack = !depSet.has(activeEffect)
  if (shouldTrack) {
    depSet.add(activeEffect)
    activeEffect.deps.push(depSet)
  }
}

export function track(target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      targetMap.set(target, depsMap = new Map())
    }
    let depSet = depsMap.get(key)
    if (!depSet) {
      depsMap.set(key, depSet = new Set())
    }
    trackEffect(depSet)
  }
}

export function triggerEffect(depSet) {
  let depSetCopy = [...depSet]
  depSetCopy.forEach((effect) => {
    if (effect !== activeEffect) {
      if (effect.scheduler) {
        effect.scheduler()
      } else {
        effect.run()
      }
    }
  })
}
export function trigger(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) return;
  let depSet = depsMap.get(key)
  if (!depSet) return;
  triggerEffect(depSet)
}