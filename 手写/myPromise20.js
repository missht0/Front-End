// 只解决resolve then的链式调用
function MyPromise (executor) {
  this.onResolvedCallbacks = []
  const resolve = (value) => {
    setTimeout(() => {
      this.value = value
      this.onResolvedCallbacks.forEach(fn => fn(value))
    })
  }
  executor(resolve)
}
MyPromise.prototype.then = function (onResolved) {
  return new MyPromise((resolve) => {
    this.onResolvedCallbacks.push(() => {
      const result = onResolved(this.value)
      if (result instanceof MyPromise) {
        result.then(resolve)
      } else {
        resolve(result)
      }
    })
  })
}

module.exports = MyPromise