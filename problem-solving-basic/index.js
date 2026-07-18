const lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

const containCommonItems = (arr1, arr2) => {
  const set1 = new Set(arr1);

  for (let item of arr2) {
    if (set1.has(item)) {
      return true;
    }
  }

  return false;
};

const containCommonItemsNested = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

const containCommonItemsConcat = (arr1, arr2) => {
  const combinedArray = arr1.concat(arr2);
  const seen = [];

  for (let i = 0; i < combinedArray.length; i++) {
    for (let j = i + 1; j < combinedArray.length; j++) {
      if (combinedArray[i] === combinedArray[j]) {
        return true;
      }
    }
  }
  return false;
};
