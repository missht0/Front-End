/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let res = []
  let pre = intervals[0]
  for (let i of intervals) {
    if (pre[1] >= i[0]) {
      pre[1] = Math.max(pre[1], i[1])
    } else {
      res.push(pre)
      pre = i
    }


  }
  res.push(pre)
  return res
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))