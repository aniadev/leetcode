function reverseWords(s: string): string {
  const trimStr = s.trim().replace(/\s+/g, " ")
  return trimStr.split(" ").reverse().join(" ")
}
