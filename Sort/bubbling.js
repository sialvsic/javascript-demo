//bubbling  冒泡排序
//时间复杂度 O(n * n)
function bubble(array) {
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = 0; j < array.length - i; j++) {
      let z;
      if(array[j] > array[j + 1]) {
        z = array[j];
        array[j] = array[j + 1];
        array[j + 1] = z;
      }
    }
    console.log(array);
  }

  console.log(array);
}

const before_sort = [1, 5, 100, 102, 1, 3, 4, 77, 6, 2, 3, 4, 7, 9, 0];

bubble(before_sort);
