// 新建两个数组，分别用来存放奇数和偶数；
// 将偶数的数组连接到奇数数组后面。
function change(arr) {
  let arr1 = [];
  let arr2 = [];
  arr.forEach((v) => {
    if ( v % 2 === 1) {
      arr1.push(v);
    } else {
      arr2.push(v)
    }
  })
  return arr1.concat(arr2)
}
let arr = [1,2,4,5,6,54,23,56,21]
console.log(change(arr))