/**
 * 维护两个字符串数组实现
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const getCharNum = (char) => {
    return char.charCodeAt() - 97
  }

  let res = []
  let sl = s.length, pl = p.length
  if (sl < pl) return res

  let pArr = new Array(26).fill(0)
  let sArr = new Array(26).fill(0)

  for (let i = 0; i < pl; i++) {
    pArr[getCharNum(p[i])]++
    sArr[getCharNum(s[i])]++
  }

  if (pArr.toString() === sArr.toString()) res.push(0)

  for (let i = 1; i + pl - 1 < sl; i++) {
    sArr[getCharNum(s[i - 1])]--
    sArr[getCharNum(s[i + pl - 1])]++
    if (pArr.toString() === sArr.toString()) res.push(i)
  }

  return res
}

/**
 * 维护一个字符串数组实现
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const getCharNum = (char) => {
    return char.charCodeAt() - 97
  }

  let res = []
  let sl = s.length, pl = p.length
  if (sl < pl) return res

  let Arr = new Array(26).fill(0)
  // 初始化p中出现的字符在Arr中的次数，即窗口中需要出现的字符次数
  for (let i = 0; i < pl; i++) {
    Arr[getCharNum(p[i])]++
  }
  // 窗口右侧进入的字符在数组中-1
  // 窗口左侧出去的字符在数组中+1
  // 维护Arr数组，如果右侧进入的字符在数组中小于0，则说明在窗口中出现的次数大于p中出现的次数，这个时候需要右移窗口左侧，知道Arr中这个字符的值等于0
  // 如果窗口大小等于p的长度，说明窗口中的字符和p中的字符相同，此时记录窗口左侧的索引

  for (let left = 0, right = 0; right < sl; right++) {
    Arr[getCharNum(s[right])]--
    while (Arr[getCharNum(s[right])] < 0) {
      Arr[getCharNum(s[left])]++
      left++
    }
    if (right - left + 1 === pl) res.push(left)

  }



  return res
}

console.log(findAnagrams('cbaebabacd', 'abc'))