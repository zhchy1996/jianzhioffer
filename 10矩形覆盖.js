// 用一个2*1的矩形去覆盖2*n的矩形，有多少种方式
// 解法：如果第一个竖放，则还剩n-1列，f(n-1)
// 如果第一个横放，则还剩n-2列f(n-2)
// 所以f(n) = f(n-1) + f(n-2)
function squer(n) {
  let arr = [];
  arr[0] = 1;
  arr[1] = 2;
  for(let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1]
  }
  console.log(arr)
  return arr[n - 1]
}

console.log(squer(3))