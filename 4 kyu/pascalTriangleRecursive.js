// 1 => [1]
// 2 => [1, 1,1]
// 3 => [1, 1,1, 1,2,1]
// 4 => [1, 1,1, 1,2,1, 1,3,3,1]
// 5 => [1, 1,1, 1,2,1, 1,3,3,1, 1,4,6,4,1]

const memoizeArr = []

const pt = (level) => {
  if (level === 1) return [1]
  let prevLevel
  if (memoizeArr[level - 1]) {
    prevLevel = memoizeArr[level - 1]
  } else {
    prevLevel = pt(level - 1)
    memoizeArr[level - 1] = pt(level - 1)
  }
  const prevArr = prevLevel.slice(-(level - 1))
  const thisArr = [1]
  for (let i = 1; i < prevArr.length; i++) {
    thisArr[i] = prevArr[i - 1] + prevArr[i]
  }
  thisArr.push(1)
  return [...prevLevel, ...thisArr]
}

// console.log(pt(1))
// console.log(pt(2))
// console.log(pt(3))
// console.log(pt(4))
console.log(pt(400))
