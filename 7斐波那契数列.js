function Fibonacci(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  if (n > 2) {
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 2] + arr[i - 1]
    }
  }
  console.log(arr)
  return arr[n];
}

// 递归写法
function Fibonacci2(n) {
  if (n == 1) {
    return 1
  }else if (n === 0) {
    return 0;
  }
  return Fibonacci2(n -1) + Fibonacci2(n -2)
}
console.log(Fibonacci2(4))