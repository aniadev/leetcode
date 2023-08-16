var letterCombinations = function (digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }
  let result = []
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits[i]
    let letters = map[d]
    for (let j = 0; j < letters.length; j++) {
      console.log(letters[j])
    }
  }

  return result
}

console.log(letterCombinations("293"))
