function numberOf1(n) {
  let count = 0;
  while (n != 0) {
    if (n & 1 == 1) {
      count++
    }
    n = n >>> 1
  }
  return count
}

console.log(numberOf1(9))