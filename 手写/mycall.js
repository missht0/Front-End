// 因为call是被fun调用的所以要写在Function的原型上
Function.prototype.mycall = function (context, ...args) {
  /*
        边界情况
        1. 如果context是null或者undefined，那么this指向window
        2. 如果context不是对象，那么需要转换成对象
        实现思路
        1. 将函数作为context的一个属性
        2. 执行函数
        3. 删除函数
    */
  // 1. 如果context是null或者undefined，那么this指向全局对象（在浏览器中是window，在node中是global，这里使用globalThis自动适配 ）
  context = context === null || context === undefined ? globalThis : Object(context);
  // 2. 将函数作为context的一个属性
  // 创建一个唯一的临时属性名称，以便稍后在 context 上添加和移除函数
  const uniqueKey = Symbol();
  // 将函数作为context的一个属性
  context[uniqueKey] = this;
  // 3. 执行函数
  const result = context[uniqueKey](...args);
  // 4. 删除函数
  delete context[uniqueKey];
  // 5. 返回结果
  return result;
};

// test
function fun() {
  console.log(this.name);
}
let obj = {
  name: "obj",
};
globalThis.name = "globalThis";

// fun.mycall(obj); // obj
fun.mycall(null); // globalThis
