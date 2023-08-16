function restoreIpAddresses(s: string): string[] {
  const result: string[] = []

  // Helper function to check if a string is a valid segment (0 to 255)
  function isValidSegment(segment: string): boolean {
    if (segment.length > 1 && segment[0] === "0") {
      return false // Leading zeros are not allowed
    }
    return parseInt(segment) >= 0 && parseInt(segment) <= 255
  }

  // Recursive function to generate IP addresses
  function generateIP(
    currentIP: string[],
    remainingDigits: string,
    numSegments: number
  ): void {
    if (numSegments === 4) {
      if (remainingDigits.length === 0) {
        result.push(currentIP.join("."))
      }
      return
    }

    for (let i = 1; i <= 3; i++) {
      const segment = remainingDigits.slice(0, i)

      if (isValidSegment(segment)) {
        currentIP.push(segment)
        generateIP(currentIP, remainingDigits.slice(i), numSegments + 1)
        currentIP.pop()
      }
    }
  }

  generateIP([], s, 0)
  return Array.from(new Set(result)) // Remove duplicates
}
