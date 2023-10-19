/**
 * @param {number[]} height
 * @return {number}
 */

// ------------------------------------{{ 动态规划 }}------------------------------------
// var trap = function (height) {
//   // 对每个柱子，找到左右两边最高的柱子，取两者较小的那个，减去当前柱子的高度，就是当前柱子能接的雨水量
//   // 第一个柱子和最后一个柱子不能接雨水，所以不用考虑
//   let res = 0
//   let leftMax = new Array(height.length).fill(height[0])
//   let rightMax = new Array(height.length).fill(height[height.length - 1])
//   for (let i = 1; i < height.length; i++) {
//     leftMax[i] = Math.max(leftMax[i - 1], height[i])
//   }
//   for (let i = height.length - 2; i >= 0; i--) {
//     rightMax[i] = Math.max(rightMax[i + 1], height[i])
//   }
//   for (let i = 1; i < height.length - 1; i++) {
//     res += Math.min(leftMax[i], rightMax[i]) - height[i]
//   }
//   return res
// }


// ------------------------------------{{ 单调栈 }}------------------------------------
/**
 * 单调栈：栈中元素单调递增或单调递减
 * 去除无用数据：当栈顶元素小于当前元素时，栈顶元素出栈
 * @param {Array<Number>} height 
 * @returns 
 */

var trap = function (height) {
  let res = 0
  let stack = []
  height.forEach((item, index) => {
    while (stack.length && item > height[stack[stack.length - 1]]) { // 当前柱子比栈顶柱子高，可以接雨水，进入循环
      let top = stack.pop() // 栈顶元素出栈，只有一个元素时栈顶为无用数据，也要出栈
      if (!stack.length) break
      let left = stack[stack.length - 1]
      let w = index - left - 1
      let h = Math.min(height[left], item) - height[top]
      res += w * h
    }
    stack.push(index)
  })
  return res
}

console.log(trap([4, 2, 0, 3, 2, 5]))