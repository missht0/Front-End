// 接受一个函数作为参数，这个函数的两个参数分别是resolve和reject
// resolve和reject是两个函数，resolve作用是将promise的状态从pending变为resolved，reject作用是将promise的状态从pending变为rejected
// 两个函数都接受一个参数，这个参数会被传递给回调函数
// promise的状态一旦发生变化，就不会再变化

// 有一个then方法，then方法接受两个参数，第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数
// then方法返回一个新的promise对象
// then方法可以被同一个promise对象调用多次
// then方法返回的promise对象的状态由它回调函数的返回值决定
// then方法返回的promise对象的值由它回调函数的返回值决定



class MyPromise {
  constructor(executor) {
    // 不能相信用户的输入，所以要做校验
    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`)
    }

    const self = this

    // 初始化状态
    const PENDING = 'pending'
    const RESOLVED = 'fulfilled'
    const REJECTED = 'rejected'


    self.status = PENDING
    self.value = undefined
    self.reason = undefined

    // 为了解决异步问题，需要在pending状态下，将then方法传入的回调函数保存起来，等到状态发生变化时再执行
    self.onResolvedCallbacks = []
    self.onRejectedCallbacks = []



    const resolve = (value) => {
      if (self.status === PENDING) {
        self.status = RESOLVED
        self.value = value
        // 发布
        // 订阅-发布的模式是指当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知，并自动更新
        // 这里就是当执行resolve时，状态变为resolved，就会执行所有保存的回调函数
        self.onResolvedCallbacks.forEach((fn) => {
          fn(self.value)
        })
      }
    }

    const reject = (reason) => {
      if (self.status === PENDING) {
        self.status = REJECTED
        self.reason = reason
        self.onRejectedCallbacks.forEach((fn) => {
          fn(self.reason)
        })
      }
    }


    self.then = (onResolved, onRejected) => {
      // 校验参数 
      if (typeof onResolved !== 'function') {
        // 穿透
        onResolved = function (value) {
          return value
        }
      }
      if (typeof onRejected !== 'function') {
        // 如果onRejected不是函数，就抛出错误
        onRejected = function (reason) {
          throw reason
        }
      }

      // 为了实现链式调用，要在then方法中返回一个新的promise对象
      const promise2 = new MyPromise((resolve, reject) => {

        const handle = (callback, res) => {

          // 我们知道promise的then在js执行机制中是放在微队列中的，所以这里也要放在微队列中
          queueMicrotask(function () {
            // 这里的callback就是onResolved或者onRejected
            // 如果callback执行时抛出错误，promise2的状态就会变为rejected，所以要用try catch包裹
            try {
              // 如果callback执行时返回的是一个promise对象，就会执行这个promise对象的then方法，通过then方法得知这个promise对象的状态，通过then调用resolve或者reject，从而改变promise2的状态
              const x = callback(res)
              // 如果x是一个promise对象，就执行这个promise对象的then方法，如果x不是一个promise对象，就直接执行resolve
              if (x instanceof MyPromise) {
                x.then(resolve, reject)
                // 等效于
                // x.then(
                //   (value) => {
                //     resolve(value)
                //   },
                //   (reason) => {
                //     reject(reason)
                //   }
                // )

              } else {
                resolve(x)
              }

            } catch (e) {
              reject(e)
            }
          })

        }


        if (self.status === RESOLVED) {
          handle(onResolved, self.value)
        }
        if (self.status === REJECTED) {
          handle(onRejected, self.reason)
        }
        if (self.status === PENDING) {
          self.onResolvedCallbacks.push(function () {
            // onResolved(self.value)
            handle(onResolved, self.value)
          })
          self.onRejectedCallbacks.push(function () {
            // onRejected(self.reason)
            handle(onRejected, self.reason)
          })
        }
      })


      return promise2



      // if (self.status === RESOLVED) {
      //   // onResolved(self.value)
      //   // queueMicrotask(function () {// 放入微队列中
      //   //   onResolved(self.value)
      //   // })
      // }
      // if (self.status === REJECTED) {
      //   // onRejected(self.reason)
      //   // queueMicrotask(function () {
      //   //   onRejected(self.reason)
      //   // })
      // }
      // if (self.status === PENDING) {
      //   self.onResolvedCallbacks.push(function () {
      //     onResolved(self.value)
      //   })
      //   self.onRejectedCallbacks.push(function () {
      //     onRejected(self.reason)
      //   })
      // }
    }



    // executor(resolve, reject)
    // 为了让异常能够传递到下一个promise，所以要用try catch包裹
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }

  }



}

module.exports = MyPromise

