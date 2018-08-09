function findMin(arr) {
  let len = arr.length;
  if (len === 0) {
    return 0;
  }
  let low = 0;
  let high = len - 1;
  // 停止标准为low与high相邻
  while (low + 1 < high) {
    let mid = low + Math.ceil((high - low) / 2);// 求中间位置（奇数取中间，偶数取偏后）
    // 如果中间大于头指针则证明中间在前一个递增数组中，将头指针移到中间点
    if (arr[mid] > arr[low]) {
      low = mid;
    }
    // 如果中间小于头指针则证明中间在后一个递增数组中，将尾指针移动到中间点
    else if (arr[mid] < arr[low]) {
      high = mid
    }
    // 只有一种情况中间等于头指针，就是后面的递增数组等于前面递增数组的最小值
    else {
      break;
    }
  }
  return arr[high]
}


let arr = [3, 4, 5, 1, 2];
console.log(findMin(arr))


// 原数组为[1, 2, 3, 4, 5]，旋转后为[3, 4, 5, 1, 2]
// 旋转后的数组为两个递增数组
// 创建两个指针，分别向中间移动，当两个指针位置相邻时即可得出最小值