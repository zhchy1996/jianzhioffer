// 青蛙一次可以跳1级到n级，n级台阶有多少种跳法

// 方法一：假定第一次跳的是n阶，那么剩下的是0个台阶，跳法是f（0）=1；
// 假定第一次跳的是（n-1）阶，那么剩下的是1个台阶，跳法是f（1）=1；
// ... ...
// 假定第一次跳的是1阶，那么剩下的是（n-1）个台阶，跳法是f（n-1）；
// 以此类推， 由假设得出总跳法为：f（n）=f（n-1）+f（n-2）+···+f（1）+f（0）；
// 由于f（n-1）=f（0）+f（1）+···f（n-2），
// 因此f（n）=（f（0）+f（1）+···f（n-2））+f（n-1）=f（n-1）+f（n-1）；
// 由此可得
// n=1, f(n)=1
// n>1,且为整数, f(n)=2*f(n-1)
function jumpFloor1(n) {
  if (n < 2) {
    return 1
  }
  let arr = [];
  arr[0] = 1;
  for (let i = 1; i < n; i++) {
    arr[i] = 2 * arr[i - 1]
  }
  console.log(arr)
  return arr[n - 1];
}
// 方法二：每级台阶都有跳与不跳两种选择，最后一级必须跳所以方法是2^n-1
function jumpFloor2(n) {
  return Math.pow(2, n-1)
}

console.log(jumpFloor2(3))