// create an Array using an Array literal
const groceryList = ["bananas", "grapes", "oranges", "pineapples"];
// access the 1st item in the Array

groceryList[0];
console.log([groceryList[0]]);

// access the last item in the Array
groceryList[3];
console.log([groceryList[3]]);

// print the length of the Array
groceryList.length;

// use the length property to access the last item in the Array

console.log(groceryList[groceryList.length - 1 ]);
// with for...of, loop over the Array, modify the value and add to a different Array
for ( let list of groceryList) {
  console.log(list);
};
console.log(groceryList);
groceryList.push("strawberries", "cantaloupe");
console.log(groceryList);

let list = groceryList;
console.log(list);
