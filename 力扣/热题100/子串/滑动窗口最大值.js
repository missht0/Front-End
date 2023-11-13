/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = []
  let maxqueue = [] // 存放下标,队头是最大值,如果左侧的值小于当前值,就把左侧的值出队,因为左侧的值不可能成为最大值了
  for (let i = 0; i < nums.length; i++) {
    if (i - maxqueue[0] >= k) {
      maxqueue.shift()
    }
    while (nums[maxqueue[maxqueue.length - 1]] <= nums[i]) {
      maxqueue.pop()
    }
    maxqueue.push(i)
    if (i >= k - 1) {
      res.push(nums[maxqueue[0]])
    }
  }
  return res

}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))