// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Keshav pandit", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2]);
 

//  Array methods

// myArr.push(8)
// myArr.push(9)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

// The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.
// The splice() method changes the original array and slice() method doesn’t change the original array.
// The splice() method can take n number of arguments and slice() method takes 2 arguments.

console.log("A", myArr );

const myn1 = myArr.slice(1, 3) //slice doesnt affect the original array

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3) //splice manipulate the original array
console.log("C", myArr);
console.log(myn2);



