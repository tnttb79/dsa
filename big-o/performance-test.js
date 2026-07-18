// O(N) --> Linear Time
const nemo = ["nemo"];

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
}

findNemo(nemo);

// o(n^2) --> Quadratic Time
// Log all pairs of this Array
const myArr = [1, 2, 3, 4, 5];

const logPair = (arr) => {
  arr.forEach((item) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(`${item} - ${arr[i]}`);
    }
    console.log("---------");
  });
};

logPair(myArr);
