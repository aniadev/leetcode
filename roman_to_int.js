let symbol = new Map()
symbol.set("I", 1)
symbol.set("V", 5)
symbol.set("X", 10)
symbol.set("L", 50)
symbol.set("C", 100)
symbol.set("D", 500)
symbol.set("M", 1000)

var romanToInt = function (s) {
  let sum = 0
  let prev = 0
  for (let i = s.length - 1; i >= 0; i--) {
    let curr = symbol.get(s[i])
    if (curr < prev) {
      sum -= curr
    } else {
      sum += curr
    }
    prev = curr
  }
  return sum
}
const str = "XXIV"
console.log(romanToInt(str))
