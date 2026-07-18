// two sum //
//brute force O(n2)
var twoSum = function (nums, target) {
  for (let i = 0; i < array.length; i++) {
    let current = nums[i];
    for (let j = 0; j < array.length; j++) {
      if (i == j) continue;
      else if (current + nums[j] == target) return [i, j];
    }
  }
};
//hashmap: O(n)
var twoSum = function (nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let numToFind = target - current;
    if (hashmap.hasOwnProperty(numToFind)) return [hashmap[numToFind], i];
    hashmap[current] = i;
  }
};

// Merge Two Sorted Lists: O(m+n) //
var mergeTwoLists = function (list1, list2) {
  tempHead = new ListNode();
  current = tempHead;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    current = current.next;
  }
  return tempHead.next;
};

// 121. Best Time to Buy and Sell Stock //
//Brute force O(n2)
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let sell = prices[j];
      const tempProfit = sell - buy;
      if (tempProfit <= 0) continue;
      else {
        if (tempProfit > profit) profit = tempProfit;
      }
      //  profit = tempProfit > profit ? tempProfit : profit
    }
  }
  return profit;
};
// O(n)
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;

  let max = 0;
  let low = 0;
  let high = 1;

  while (high < prices.length) {
    const profit = prices[high] - prices[low];

    if (profit < 0) {
      // found a new lower buy price
      low = high;
    } else if (profit > max) {
      max = profit;
    }
    high++;
  }
  return max;
};

// 125. valid palindrome
var isPalindrome = function (s) {
  const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = normalized.length - 1;
  while (left < right) {
    if (normalized[left] !== normalized[right]) return false;
    left++;
    right--;
  }
  return true;
};

// 226 invert binary tree:
var invertTree = function (root) {
  if (root == null) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// 242.Valid Anagram
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const myMap = new Map();
  for (char of s) {
    myMap.set(char, !myMap.get(char) ? 1 : myMap.get(char) + 1);
  }
  for (char of t) {
    if (myMap.get(char) == 0) return false;
    myMap.set(char, myMap.get(char) - 1);
  }
  return true;
};

// 704. Binary search:
var search = function (nums, target) {
  let low = 0;
  high = nums.length - 1;
  while (low != high) {
    let mid = low + Math.floor((high - low + 1) / 2);
    if (target > nums[mid]) low = mid + 1;
    else high = mid;
  }
  return nums[low] == target ? 1 : 0;
};

// 733. Flood fill:
var floodFill = function (image, sr, sc, color) {
  // conditions to end early
  if (color == image[sr][sc]) return image;
  // fill will take of validtions and fill color
  fill(image, sr, sc, color, image[sr][sc]);
  return image;
};

var fill = (image, sr, sc, colorToFill, colorOfStart) => {
  // not out of bound
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[sr].length)
    return image;
  // match with parent
  if (image[sr][sc] != colorOfStart) return;

  image[sr][sc] = colorToFill;

  // recursively fill 4 surrounding neibourgh. Will end if out of bound or doesn't match with original cell's color
  fill(image, sr - 1, sc, colorToFill, colorOfStart);
  fill(image, sr + 1, sc, colorToFill, colorOfStart);
  fill(image, sr, sc - 1, colorToFill, colorOfStart);
  fill(image, sr, sc + 1, colorToFill, colorOfStart);
};

//235. LCA of a BST
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    //go right
    if (p.val > root.val && q.val > root.val) {
      root = root.right;
      // go left
    } else if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else {
      return root;
    }
  }
};

//110. Balance Binary Tree
var isBalanced = function (root) {
  function dfs(root) {
    // base case
    if (!root) return [true, 0];

    //details
    const [isLeftBalanced, leftHeight] = dfs(root.left);
    const [isRightBalanced, rightHeight] = dfs(root.right);

    const height = Math.max(leftHeight, rightHeight) + 1;
    const isBalanced =
      Math.abs(leftHeight - rightHeight) <= 1 &&
      isLeftBalanced &&
      isRightBalanced;

    // common goal
    return [isBalanced, height];
  }
  return dfs(root)[0];
};
