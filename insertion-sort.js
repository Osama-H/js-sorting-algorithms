const insertionSort = (arr) => {
  const newArr = [0, ...arr];
  let n = arr.length;
  let j, x;

  for (let i = 1; i <= n; i++) {
    x = newArr[i];
    newArr[0] = x;

    j = i - 1;
    while (newArr[j] > x) {
      newArr[j + 1] = newArr[j];
      newArr[j] = x;
      j--;
    }
  }
  return newArr.slice(1);
};

console.log(insertionSort([2, 4, 6, 8]));
