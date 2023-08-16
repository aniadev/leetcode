/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length
  const n = word2.length

  // Tạo bảng 2D và khởi tạo các giá trị cơ bản
  const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0))
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }

  // Tính toán số lần thực hiện các phép thay đổi
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // Xóa
          dp[i][j - 1] + 1, // Chèn
          dp[i - 1][j - 1] + 1 // Thay thế
        )
      }
    }
  }

  return dp[m][n]
}
