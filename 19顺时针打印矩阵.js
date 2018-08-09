// 顺时针打印矩阵
// 1  2  3  4  5 
// 5  6  7  8  5 
// 9  10 11 12 5
// 13 14 15 16 5
// 17 18 19 20 5

function print(arr) {
  if(!arr.length) return;
  let res = [];
  let row = arr[0].length;
  let col = arr.length;
  let x = 0;
  let y = 0;
  while( row > 0 ) {
    // 左至右
    for (let i = 0; i < row; i++) {
      res.push(arr[x][y])
      y++
    }
    col--
    x++
    y--
    // 上至下
    for (let i = 0; i < col; i++) {
      res.push(arr[x][y])
      x++
    }
    row--
    y--
    x--

    // 右至左
    for (let i = 0; i< row; i++) {
      res.push(arr[x][y])
      y--
    }
    col--
    x--
    y++
    // 下至上
    for (let i = 0; i< col; i++) {
      res.push(arr[x][y])
      x--
    }
    row --
    y++
    x++
  }
  return res
}
let arr = [[1,2,3,4,5], [5,6,7,8,5], [9,10,11,12,5], [13,14,15,16,5], [17,18,19,20,5]]
console.log(print(arr))
