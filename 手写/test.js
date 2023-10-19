const getData = () => new Promise(resolve => setTimeout(() => resolve(+new Date), 1000))

function* testG () {
  // await被编译成了yield
  const data = yield getData()
  console.log('data: ', data)
  const data2 = yield getData()
  console.log('data2: ', data2)
  return 'success'
}
// 返回了一个迭代器
var gen = testG()
// 第一次调用next 停留在第一个yield的位置
// 返回的promise里 包含了data需要的数据
var dataPromise = gen.next()
gen.next(123)
// dataPromise.value.then((data) => {
//   // 第二次调用next 将data传入
//   console.log('data: ', data)
//   // var data2Promise = gen.next(data)
//   // data2Promise.value.then((data2) => {
//   //   // 第三次调用next 将data2传入
//   //   gen.next(data2)
//   // })
// })