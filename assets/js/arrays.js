//1
const newArr = [3, 7, "John", 9, 5];

for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}

//2
let arr12 = [37, 10, 26, 22, 9, 14, 5, 11];

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log("Простые числа в массиве:");
arr12.forEach((n) => {
  if (isPrime(n)) {
    console.log(n);
  }
});

//3
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

//4
let arr3 = [6, 5, 4];
console.log(arr3.reverse());

//5
let arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
console.log(arr4);

//6
let arr5 = [7, 8, 9];
arr5.unshift(1, 2, 3);
console.log(arr5);

//7
let arr6 = ["aaa", "bbb", "ccc"];

console.log(arr6.shift());
console.log(arr6);

//8
let arr7 = ["aaa", "bbb", "ccc"];

console.log(arr7.pop());
console.log(arr7);

//9
let arr8 = [9, 10, 11, 12, 13];
console.log(arr8.slice(2, 5));

//10
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);

//11
let arr10 = [1, 2, 3, 4, 5];
console.log(arr10.slice(2));

//12
let arr11 = [1, 2, 3, 4, 5];

arr11.splice(1, 0, "w", "trtr");
arr11.splice(5, 0, "vvv", "a", "hello");

console.log(arr11);

//13

const vowelsArray = ["a", "e", "i", "o", "u", "y"];

function countVowels(str, vowelsArray) {
  let count = 0;
  for (let item of str) {
    if (vowelsArray.includes(item)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello to you", vowelsArray));
console.log(countVowels("lorem ipsum dolor sit amet", vowelsArray));
