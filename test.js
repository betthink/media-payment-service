const data = [
  {
    nama: "Budi",
    age: 30,
  },
  {
    nama: "Tejo",
    age: 17,
  },
  {
    nama: "Bejo",
    age: 23,
  },
  {
    nama: "Harjo",
    age: 20,
  },
];

const bubleSortByAge = (arr) => {
  const n = arr.length;
  let swap;
  do {
    swap = false;
    for (let i = 0; i <= n - 1; i++) {
      // console.log(arr[i].age);

      if (arr[i].age > arr[i + 1].age) {
        // const dataAge = arr[i];
        // arr[i] = arr[i + 1];
        // console.log((arr[i + 1] = dataAge));
        console.log(arr[i + 1]);
      }
    }
  } while (swap);
  return arr;
};
bubleSortByAge(data);
// const stairsShape = (n) => {
//   for (let i = 1; i <= n; i++) {
//     const space = " ".repeat(n - i);
//     const star = "*".repeat(i);

//     const stair = space + star;
//     console.log(stair);
//   }
// };

// stairsShape(6);
