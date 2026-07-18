const printAsync = (value, ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(console.log(`printed value: ${value}`)), ms);
  });

const firstLevelPrint = async () => {
  await printAsync(1, 2000);
  await printAsync(2, 2000);
  await printAsync(3, 2000);
  console.log("after async");
};

const firstLevelPrintAll = async () => {
  await Promise.all([
    printAsync(10, 2000),
    printAsync(20, 2000),
    printAsync(30, 2000),
  ]);
  console.log("after async all");
};
firstLevelPrint();
firstLevelPrintAll();

console.log("main thread print");
