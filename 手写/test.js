const Promise = require('./myPromise')


new Promise(function (resolve, reject) {
  console.log('start')
  // setTimeout(function () {
  //   resolve('hello')
  // }, 2000)
  // resolve('hello')
  reject('error')
  // throw new Error('error')
})
  .then(
    (value) => {
      console.log('then1', value)
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('world')
        }, 2000)
      })
    },
    (reason) => {
      console.log('reason1', reason)
      return reason
    }
  )
  .then((value) => {
    console.log('then2', value)
  })

// .then(
//   (value) => {
//     console.log('value', value)
//   },
//   (reason) => {
//     console.log('reason', reason)
//   })

console.log('end')