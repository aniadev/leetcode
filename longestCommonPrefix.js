strs = ["flower", "flow", "flight"]

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""
  if (strs.length === 1) return strs[0]
  var prefix = strs[0]
  for (var i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix === "") return ""
    }
  }
  return prefix
}

console.log(longestCommonPrefix(strs))
