// give me 2 sorted arrays
const arr1 = [1, 3, 5, 7, 0, 0, 0, 0];
const arr2 = [2, 4, 6, 8];

// from scratch with not built-in js method
// using 2 pointers
const mergeSortedArrs = (nums1, m, nums2, n) => {
  // 3 pointers, track arr1, arr2, and placement in nums1
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let placementPointer = m + n - 1;
  // loop over 2 arrs w/ while and place them in the nums1 arr
  while (pointer2 >= 0) {
    if (pointer1 >= 0 && nums1[pointer1] > nums2[pointer2]) {
      nums1[placementPointer] = nums1[pointer1];
      pointer1--;
    } else {
      nums1[placementPointer] = nums2[pointer2];
      pointer2--;
    }
    placementPointer--;
  }
};

// built-in js method
const builtInMerge = function (nums1, m, nums2, n) {
  array1 = nums1.slice(0, m);
  array2 = nums2.slice(0, n);
  merged = [...arr1, ...arr2].sort((a, b) => a - b);
  for (let i = 0; i < merged.length; i++) {
    nums1[i] = merged[i];
  }
};
// builtInMerge(arr1, 4, arr2, 4);
mergeSortedArrs(arr1, 4, arr2, 4);
console.log(arr1);
