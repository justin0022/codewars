// 1 => [1]
// 2 => [1, 1,1]
// 3 => [1, 1,1, 1,2,1]
// 4 => [1, 1,1, 1,2,1, 1,3,3,1]
// 5 => [1, 1,1, 1,2,1, 1,3,3,1, 1,4,6,4,1]

const pt = (level) => {
  if (level === 1) return [1]
  if (level === 2) return [...pt(1), 1, 1]
  const prevArr = pt(level - 1).slice(-(level - 1))
  const thisArr = [1]
  for (let i = 0; i < prevArr.length - 1; i++) {
    thisArr[i + 1] = prevArr[i] + prevArr[i + 1]
  }
  thisArr.push(1)
  return [...pt(level - 1), ...thisArr]
}

console.log(pt(5))
