/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxPre = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    maxPre = Math.max(maxPre + nums[i], nums[i])// 找出包括当前元素的最大字串，如果(当前元素)比(包括前一个元素的最大字串)还大，那么就从当前元素开始重新计算
    max = Math.max(max, maxPre)
    console.log(maxArr)
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))