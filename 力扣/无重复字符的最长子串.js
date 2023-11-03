/**
 * 当没有重复字符时，右指针不断右移
 * 出现重复字符，左指针右移，同时
 * 集合中只存储左指针到右指针之间的字符
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length
  let res = 0, right = -1
  let set = new Set()
  for (let i = 0; i < s.length; i++) {
    if (i != 0) {
      set.delete(s[i - 1])
    }
    while (right + 1 < s.length && !set.has(s[right + 1])) {
      set.add(s[right + 1])
      right++
    }
    res = Math.max(res, right - i + 1)
  }
  return res

}


console.log(lengthOfLongestSubstring('abcabcbb'))