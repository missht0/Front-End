const obj = {
  x: 1,
  sayThis: () => {
    console.log(this)
  }
}

obj.sayThis() // window 因为 JavaScript 没有块作用域，所以在定义 sayThis 的时候，里面的 this 就绑到 window 上去了
const globalSay = obj.sayThis
globalSay() // window 浏览器中的 global 对象
