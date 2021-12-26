function rot13(str) {
  // Get a string from a given string
  const givenStr = str.split('')

  // Get alphabet array
  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map((letter) => String.fromCharCode(letter))

  // Iterate over givenStr and return letter from aphabet array for 13 places biger than given letter
  const strCode = givenStr.map((letter) => {
    const letterCode = letter.charCodeAt(0)
    if (letterCode > 64 && letterCode < 91) {
      const checkLetterNum = letterCode + 13
      if (checkLetterNum > 90) {
        return 65 + (checkLetterNum - 91)
      } else {
        return checkLetterNum
      }
    } else {
      return letter
    }
  })

  const newStr = strCode.map((letter) => {
    if (letter > 64 && letter < 91) {
      return String.fromCharCode(letter)
    } else {
      return letter
    }
  })

  const replaceWhiteSpace = newStr.map((letter) => {
    if (letter === ' ') {
      return letter.replace(' ', '*')
    } else {
      return letter
    }
  })

  str = replaceWhiteSpace.join('')
  str = str.replace(/[*]/g, ' ')

  return str
}

rot13('SERR PBQR PNZC')
