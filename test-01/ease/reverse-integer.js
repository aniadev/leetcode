const MIN = -2147483648
const MAX = 2147483647

function reverse(x) {
  const isNegative = x < 0
  const reverseXStr = (x > 0 ? x : -x).toString().split("").reverse().join("")
  const reverseX = parseInt(reverseXStr)
  if (reverseX < MIN || reverseX > MAX) {
    return 0
  }
  return isNegative ? -reverseX : reverseX
}
