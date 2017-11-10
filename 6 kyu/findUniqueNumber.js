// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq (arr) {
  const sorted = arr.sort((a, b) => a - b)
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] != sorted[i - 1] && sorted[i] != sorted[i + 1]) {
      return sorted[i]
    }
  }
}
