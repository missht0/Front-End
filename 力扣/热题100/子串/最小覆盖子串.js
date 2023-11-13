/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let minLen = Infinity
  let res = ''
  let map = new Map()

  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) || 0) + 1)
  }
  let needType = map.size
  for (let l = 0, r = 0; r < s.length; r++) {
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) - 1)
      if (map.get(s[r]) === 0) {
        needType--
      }
    }
    while (needType == 0) {

      if (r - l + 1 < minLen) {
        minLen = r - l + 1
        res = s.slice(l, r + 1)
      }
      if (map.has(s[l])) {
        map.set(s[l], map.get(s[l]) + 1)
        if (map.get(s[l]) === 1) {
          needType++
        }
      }

      l++
    }


  }
  return res
}


console.log(minWindow('ADOBECODEBANC', 'ABC'))