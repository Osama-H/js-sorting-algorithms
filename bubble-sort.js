const bubbleSort = (arr) => {
  let tmp;
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    for (let j = n - 1; j >= i; j--) {
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([2, 4, 6, 8]));
