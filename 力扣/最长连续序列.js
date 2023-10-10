/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0
  nums = [...new Set(nums)]
  nums.sort((a, b) => a - b)
  let max = 0
  let count = 0
  let set = new Set(nums)
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    if (!set.has(nums[i] - 1)) {
      count = 1
      while (set.has(cur + 1)) {
        count++
        cur++
      }
      max = Math.max(max, count)
    }
  }
  return max




}