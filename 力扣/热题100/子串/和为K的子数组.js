/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 方法二：前缀和 + 哈希表优化，从左向右遍历一边数组，在hash表中记录当前下标之前的前缀和出现的次数，如果当前前缀和减去k在hash表中出现过，出现过几次就说明以当前位置为结尾的子数组中有几个子数组的和为k，更新结果。
 */
var subarraySum = function (nums, k) {
  let res = 0, sum = 0
  const map = new Map()
  map.set(0, 1) // 前缀和为0的子数组出现了1次,这个是为了处理数组中所有元素和为k的情况
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (map.has(sum - k)) {
      res += map.get(sum - k)
    }
    map.set(sum, (map.get(sum) || 0) + 1)
  }



  return res
}


console.log(subarraySum([-1, -1, 1], 0))