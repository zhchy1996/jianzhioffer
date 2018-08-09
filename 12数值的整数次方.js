// 考察指数的正负以及底数是否为零的几种情形；
// 将指数转换为二进制形式，比如13=1101；
// 例如求解10^13次方，可转换为(10^0001)(10^0100)(10^1000);
// 通过&1（按位与）和>>1（右移1）运算逐位读取1101，为1时将该位代表的乘数累乘到最终结果。


function pow(base, expoent) {
  let n,
  res = 1,
  curr = base;
  if (expoent > 0) {
    n = expoent;
  } else if (expoent < 0) {
    if (base ===0 ) {
      throw new Error('分母不可为0！')
      n = -expoent;
    }
  } else {
    return 1
  }
  while( n!== 0) {
    if ( n & 1 === 1) {
      res *= curr
    }
    curr *= curr;
    n >>= 1
  }
  return expoent >= 0 ? res : (1 / res);
}
console.log(pow(10, 2))
