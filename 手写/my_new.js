// 箭头函数
const obj = {
  name: 'John',
  greet: function () {
    console.log('obj1', this);
    (() => {
      console.log(this)
    })()
  }
}
obj.greet()

// 普通函数
const obj2 = {
  name: 'John',
  greet: function () {
    console.log('obj2', this);

    (function () {
      console.log(this)
    })()
  }
}
obj2.greet() 