// 青蛙一次可以跳1级或2级，n级台阶有多少种跳法
function jumpFloor(n) {
  if (n < 2) {
    return 1
  }
  let arr = [];
  arr[0] = 1;
  arr[1] = 2;
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr)
  return (arr[n - 1])
}

console.log(jumpFloor(4))