let person = {
  name: 'lcd',
  get aliasName () {
    return `我的名字是${this.age}`
  },
  get age(){
    return this.name
  }
}
let personProxy = new Proxy(person, {
  get (target, key, receiver) {
    console.log('取值',key)
    return Reflect.get(target,key,receiver)//如果target对象中指定了getter，receiver则为getter调用时的this值。
    // return target[key]
  }
})
console.log(personProxy.aliasName, 12)
//只取了一次aliasName的get，取this.name时没有走get方法。
// 只触发了aliasName获取操作，没有触发name的操作。因为返回的是target[key]所以返回的是原对象的这个属性值。
// 所以没有走代理对象personProxy的属性取值
// console.log(person.name, person.sss)

// 这时去改name,是不会触发试图更新的，因为这个属性没有被收集
personProxy.name = 'xxx'


// 在获取aliasName的时候，让name属性也去触发get



