/*
Write a function

tripledouble(num1,num2)
which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
For example:
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
If this isn't the case, return 0
*/

function tripledouble (num1, num2) {
  const checkThreeConsec = (number) => {
    const arrayOfDigits = String(number).split('')

    const filtered = arrayOfDigits.filter((x, index) => {
      if (x === arrayOfDigits[index + 1] && x === arrayOfDigits[index + 2]) {
        return true
      }
    })
    if (filtered.length > 0) return filtered
    else return false
  }

  const checkTwoConsec = (number, checkThreeConseqResult) => {
    const arrayOfDigits = String(number).split('')

    const filtered = arrayOfDigits.filter((x, index) => {
      if (x === arrayOfDigits[index + 1] && checkThreeConseqResult.includes(x)) {
        return true
      }
    })

    if (filtered.length === 0) return 0
    else return 1
  }

  const checkThreeConseqResult = checkThreeConsec(num1)

  if (checkThreeConseqResult) {
    return checkTwoConsec(num2, checkThreeConseqResult)
  } else return 0
}
