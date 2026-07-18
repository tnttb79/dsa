// with array
const firstRecurringChar = (arr) => {
  const placeholder = [];
  for (let i = 0; i < arr.length; i++) {
    if (placeholder.includes(arr[i])) {
      return arr[i];
    } else {
      placeholder.push(arr[i]);
    }
  }
  return undefined;
};
console.log(firstRecurringChar([1, 2, 3, 5, 5, 6, 7, 8]));
console.log(firstRecurringChar([1, 2, 3, 4, 5, 6, 9, 9]));
console.log(firstRecurringChar([1, 1, 3, 5, 5, 6, 7, 8]));

// with hashtable
const firstRecurringChar2 = (arr) => {
  const placeholder = {};
  for (let i = 0; i < arr.length; i++) {
    if (placeholder[arr[i]]) return arr[i];
    placeholder[arr[i]] = true;
  }
  return undefined;
};
console.log(firstRecurringChar2([1, 2, 3, 5, 5, 6, 7, 8]));
console.log(firstRecurringChar2([1, 2, 3, 4, 5, 6, 9, 9]));
console.log(firstRecurringChar2([1, 1, 3, 5, 5, 6, 7, 8]));
