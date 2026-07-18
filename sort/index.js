//buble sort:
const bubbleSort = (array) => {
  let isChange = true;
  while (isChange) {
    isChange = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isChange = true;
      }
    }
  }
  return array;
};

// console.log(bubbleSort(arr));

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[smallestIndex] > array[j]) smallestIndex = j;
    }
    if (smallestIndex !== i)
      [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
  }
  return arr;
};
// console.log(selectionSort(arr));

const insertionSort = (array) => {
  let result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (array[i] < result[j]) {
        result.splice(j, 0, array[i]);
        break;
      }
      if (j == result.length - 1) {
        result.push(array[i]);
        break;
      }
    }
  }
  return result;
};
// console.log(insertionSort(arr));

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort1(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    5;
    if (array[i] < array[0]) {
      // Move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find where number should go
      for (let j = 1; j < i; j++) {
        // if (array[i] > array[j - 1] && array[i] < array[j]) {
        //   // Move number to the right spot
        //   array.splice(j, 0, array.splice(i, 1)[0]);
        // }
        if (array[j] > array[i]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
          break;
        }
      }
    }
  }

  return array;
}

// console.log(insertionSort1(numbers));

const arr = [4, 7, 2, 9, 5, 1, 10, 3, 6, 8];

const merge2SortedArrays = (arr1, arr2) => {
  let result = [];
  while (arr1.length || arr2.length) {
    if (arr1.length && arr2.length)
      result.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift());
    else result.push(arr1.length ? arr1.shift() : arr2.shift());
  }
  return result;
};
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  else {
    const middle = Math.floor(arr.length / 2);
    return merge2SortedArrays(
      mergeSort(arr.slice(0, middle)),
      mergeSort(arr.slice(middle))
    );
  }
};
// console.log(mergeSort(arr));

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  //sort w/ pivot logic here:
  const pivot = arr[arr.length - 1];
  let i,
    j = 0;
  for (j; j < arr.length - 1; j++) {
    if (arr[j] > pivot) continue;
    else {
      if (i == undefined) i = 0;
      else i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // recursion for return:p
  return [
    ...quickSort(arr.slice(0, i + 1)),
    pivot,
    ...quickSort(arr.slice(i + 1, arr.length - 1)),
  ];
};

console.log(quickSort(arr));
console.log(quickSort([9, 2, 11, 10]));
