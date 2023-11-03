
this.a = 1
const obj = {
  b: 2,
  sayThis: () => {
    console.log(this)
  }
}

obj.sayThis()
console.log(this)