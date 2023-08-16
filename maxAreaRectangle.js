/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0

  const rows = matrix.length
  const cols = matrix[0].length

  // Convert each row to a histogram of consecutive ones
  const heights = Array.from({length: rows}, () => Array(cols).fill(0))
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === "1") {
        heights[r][c] = r === 0 ? 1 : heights[r - 1][c] + 1
      }
    }
  }
  console.log(">>> / file: maxAreaRectangle.js:13 / heights:", heights)

  // Function to find the largest rectangle in a histogram
  const largestRectangleArea = (heights) => {
    const stack = []
    let maxArea = 0

    for (let i = 0; i <= heights.length; i++) {
      console.log(
        ">>> / file: maxAreaRectangle.js:28 / i",
        i,
        ` heights[i]:`,
        heights[i]
      )
      while (
        stack.length > 0 &&
        (i === heights.length || heights[i] < heights[stack[stack.length - 1]])
      ) {
        const _stack = stack.pop()
        const height = heights[_stack]
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
        console.log(
          `while:::`,
          `_stack`,
          _stack,
          `height`,
          height,
          `width`,
          width
        )
        maxArea = Math.max(maxArea, height * width)
      }
      stack.push(i)
    }

    return maxArea
  }

  // Find the maximum area rectangle
  let maxRectangle = 0
  for (let r = 0; r < rows; r++) {
    maxRectangle = Math.max(maxRectangle, largestRectangleArea(heights[r]))
  }

  return maxRectangle
}

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
]
maximalRectangle(matrix)
