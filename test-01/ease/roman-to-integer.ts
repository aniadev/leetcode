type RomanCharacters = "I" | "V" | "X" | "L" | "C" | "D" | "M"

const romanDictionary: Record<RomanCharacters, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanToInt(s: string): number {
  const romanArray = s.match(/[I,V,X,L,C,D,M]/g) as RomanCharacters[]
  let result = 0
  romanArray.forEach((romanCharacter, i) => {
    const romanCharacterValue =
      romanDictionary[romanCharacter as RomanCharacters]
    if (romanCharacterValue < romanDictionary[romanArray[i + 1]]) {
      result -= romanCharacterValue
    } else {
      result += romanCharacterValue
    }
  })
  return result
}
