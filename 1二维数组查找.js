// 左下的规律是向右递增，向上递减，右上的规律是向下递增向左递减
function find(target, arr) {
  let row = arr[0].length;
  let i = 0;
  let j = row -1;
  while(j >=0 && arr[i][j]){
    let source = arr[i][j]
    if (target > source) {
      i++;
    } else if (target < source) {
      j--;
    } else {
      return true;
    }
  }
  return false;
}
console.log(find(13, [[1,2,8,9], [2,4,9,12], [4,7,10,13], [6,8,11,15]]))