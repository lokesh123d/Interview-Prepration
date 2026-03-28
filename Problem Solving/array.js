const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr2 = [2, 3, 3, 4, 5, 68, 9, 2, 4, 8, 5];
let ducharr = [1, 2, , 0, 0, 0, 2, 2, 1, 2];
// // // Move array to the end...
// // const array = [1,0,1,3,40,4,40,0,4,67,0];
// // let newArray = array.filter(val => val !== 0);
// // let howMuch = array.length - newArray.length;
// // let length = newArray.length;
// // for(let i = 0;i<howMuch;i++){
// //     // newArray[length+i] = 0;
// // newArray.push(0);
// // }
// // console.log(newArray);

// const array =[2,3,4,5,7,8,73,2];

// // console.log(array.filter((val)=>{
// //     val+=val*2;
// // val = val*3;
// // }));

// let ans = array.reduce((acc,val)=>{
//     acc[val] = (acc[val]||0 )+1;
//     return acc;
// },{});
// console.log(ans);

// // const fruits = ["apple", "banana", "apple", "orange", "banana"];

// // const count = fruits.reduce((acc, fruit) => {
// //   acc[fruit] = (acc[fruit] || 0) + 1;
// //   return acc;
// // }, {});

// // console.log(count);

// var findMedianSortedArrays = function(nums1, nums2) {
//     let ans = (+nums1.toString()+","+(nums2.toString()).split(','))
//     // let a = ans.split(',');
//     console.log(ans);

// };

// findMedianSortedArrays([1,2,3],[4,45,6]);

// function rotateArraybyN(arr,n){
//     newarr = [];
// for(let i = 0;i<arr.length;i++){
//     (newarr[Math.round((i+n)%arr.length)]= arr[i]);
// }
// console.log(newarr);
// }

// rotateArraybyN([1,8,2,3,4,5,6],1);

// [ 5, 6, 1, 8,2, 3, 4]
// [1,1,2,3,4,5,6]

// find the missing number in n

// let arr = [1,2,3,4,5,6,7,8,9];
// let n = 9;
// let newarr = arr.sort(a,b=>a-b)
// let first = 1;

// newarr.map((val)=>{

// })

// let arr = [1,2,3,4,5,6,7,8,9];
// let k = 3
// let newarr = [];
// for(let i =0;i<arr.length;i++){
//  newarr[Math.floor((i+k)%arr.length)] = arr[i];
// }
// console.log(newarr)

// count vowel and constnent
// let str = 'lokesh dangwal';
// let arr = str.split('').filter(ch => ch !== ' ');
// let newarr = arr.filter((val)=>{
//     return 'aeiou'.includes(val);
// })
// let consonent = str.length-newarr.length;
// console.log('consonent is '+ consonent +' and vowel is '+ newarr.length);
// console.log(newarr);
// console.log(arr);

// Find subarray with given sum
// let  arr2= [15, 2, 4, 8, 9, 5, 10, 23];
// let target = 24;
// let ans = [2, 5]

// function subArray(){
//     for(let i =0;i<arr2.length;i++){
//         let subarray = [];
//         subarray.push(arr2[i]);
//         for(let j =i+1;j<arr2.length;j++){
//             if(arr2[i]+arr2[j] <target){
//                 subarray.push(arr2[j]);
//             }else if(arr2[i]+arr2[j]==target){
// subarray.push(arr2[j]);
// return subarray;
//             }
//         }
//     }
// }

// console.log(subArray());

// create a subarry wihtout any repeat

// let str = 'lokeeshdangwal';
// let arr = str.split('').filter((val)=> val.trim('')!='');
// let collection =[];
// for(let i =0;i<arr.length;i++){
//     let subarray = [];
// for(let j=i;j<arr.length;j++){
//     if(!subarray.includes(arr[j])){
//         subarray.push(arr[j]);
//     }else{

//         break;
//     }
// }
// collection.push(subarray);
// }
// let max = 0;
// let indx = 0;

// for(let i =0;i<collection.length;i++){
//     if(max<collection[i].length){
//         max= collection[i].length;
//         indx = i;
//     }
// }

// console.log(collection[indx]);

// console.log(subarray);

// find all pairs with the givern sum
let target = 10;
let ansarr = [];
function findPairs(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        let pair = [arr[i], arr[j]];
        ansarr.push(pair);
      }
    }
  }
}
// findPairs(arr,target)
// console.log(ansarr)

function findPairs(arr, target) {
  let seen = new Set();
  let result = [];

  for (let num of arr) {
    let complement = target - num;

    if (seen.has(complement)) {
      result.push([complement, num]);
    }

    seen.add(num);
  }

  return result;
}

// console.log(findPairs(arr, target));

function insersionArray(arr, arr2) {
  let set1 = new Set(arr);
  let set2 = new Set(arr2);
  let ans = [];
  for (const val of set1) {
    if (set2.has(val)) {
      ans.push(val);
    }
  }
  console.log(ans);
}
// insersionArray(arr, arr2);

// union of an two array

function unionOfArray(arr, arr2) {
  return [...new Set([...arr, ...arr2])];
}
// console.log(unionOfArray(arr,arr2));

// - Sort 0s,1s,2s (Dutch flag problem)

function sortduch(ducharr) {
  // let newans =[];
  for (let i = 0; i < ducharr.length; i++) {
    for (let j = 0; j < ducharr.length; j++) {
      if (ducharr[i] > ducharr[j]) {
        ducharr[i] = ducharr[i] + ducharr[j];
        ducharr[j] = ducharr[i] - ducharr[j];
        ducharr[i] = ducharr[i] - ducharr[j];
      }
    }
  }
  console.log(ducharr);
}

// sortduch(ducharr);

// - Longest consecutive sequence

function longestSequence(arr) {
  let newans = [];
  let newArr = [...new Set(arr)].sort((a, b) => a - b);
  let longest = 0;
  for (let i = 0; i < newArr.length; i++) {
    let prev = newArr[i];
    for (let j = i + 1; j < newArr.length; j++) {
      if (prev + 1 == newArr[j]) {
        longest++;
      } else {
        prev = newArr[j + 1];
        newans.push(longest);
        longest = 0;
      }
    }
  }
  console.log(newans);
}

// longestSequence(arr);

function longestSubString(str) {
  const arr = str.split("");
  let longest = 1;
  let set = new Set();
  let start = arr[0];
  let minLongest = 1;
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      let set = new Set();
      minLongest = 1;
    } else {
      minLongest++;
      set.push(arr[i]);
      if (minLongest > longest) {
        longest = minLongest;
      }
    }
  }
}

// longestSubString('lokeshdangwal');

function reversedArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }
  console.log(arr);
}
// reversedArray([1,2,3,4,5,6,7]);

// find min and max form the array

function findMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return (min, max);
}

// console.log(findMaxAndMin([1,2,3,4,5,6,7,7,5,4,32,2,2,4,5,6,7,76,5,3,2,2,4,56,6,7,7]));

// findMaxAndMin([1,2,35,5,6,2,4,6,6,,4,234,657,24])

function findMissing(arr, n) {
  let expect = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < n - 1; i++) {
    actualSum += arr[i];
  }
  return expect - actualSum;
}

// console.log(findMissing([1,3,2,5],5));

// merge two sorted array

function mergeSorted(arr, arr2) {
  let ans = [];
  let n = arr.length;
  let m = arr2.length;
  let k = 0;
  let j = 0;

  while (k < n && j < m) {
    if (arr[k] <= arr2[j]) {
      ans.push(arr[k]);
      k++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  while (k < n) {
    ans.push(arr[k]);
    k++;
  }

  while (j < m) {
    ans.push(arr2[j]);
    j++;
  }

  return ans;
}

// console.log(mergeSorted([1, 9, 4, 7], [4, 5, 6, 7, 8, 9]));

// function anagram(s,t){
//   let arr = s.split('');
//   let arr2 = t.split('');
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//       if(arr[i])
//     }
//   }
// }

const anagram = (s, t) => {
  if (s.length != t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] != obj2[key]) return false;
  }
  return true;
};
// console.log(anagram('anagram','nagaram'));

// const twoSumTarget=(nums,target)=>{

//   let set = new Set(nums);
// for(let i =0;i<nums.length;i++){
//   let expect = target-nums[i];
//   if(expect==nums[i]) continue;
//   if(set.has(expect)) return [i,nums.indexOf(expect)];
// }
// }
// // console.log(twoSumTarget([3,2,4],6))

// const user ={
//   name:"lokesh",
//   logname(){
//     console.log(this.name);
//   }
// }

// setTimeout(user.logname.call(user),1000)

// flatten array

let flattenArray = [1, 2, [3, 6, 4, [34, 35, 23, 64]], 45, [345, 73]];
// let newarr = [];

// let ansFlattenArray = flattenArray.map((val)=>{
//   if(Array.isArray(val)){

//   for(let i =0;i<val.length;i++){
//      newarr.push(val[i]);
//   }
//   }
//   else{
//     newarr.push(val);
//   }
// })
// console.log(newarr);

// console.log(ansFlattenArray);

// custome flatten array

function customeFlattenArray(arr, defth = 1) {
  let result = [];
  arr.forEach((val) => {
    if (Array.isArray(val) && defth > 0) {
      return result.push(...customeFlattenArray(val, defth - 1));
    } else {
      result.push(val);
    }
  });
  return result;
}

// console.log(customeFlattenArray(flattenArray,2))

function foo() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
// foo()

const obj = {
  name: "lokesh",
  sayHello: function (thing) {
    console.log(this.name + "is the " + thing);
  },
};

const obj2 = {
  name: "dangwal Lokesh",
};

// const result = obj.sayHello.bind(obj2)
// result('good man')

const products = [
  { name: "iPhone", category: "electronics" },
  { name: "Samsung TV", category: "electronics" },
  { name: "Nike Shoes", category: "fashion" },
  { name: "T-shirt", category: "fashion" },
  { name: "Apple Watch", category: "electronics" },
];
let ele = [];
let fash = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].category == "electronics") {
    ele.push(products[i].name);
  } else {
    fash.push(products[i].name);
  }
}

// console.log(ele);
// console.log(fash);

function longestString(str) {
  let longest = 0;
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    let max = 0;
    if (set.has(str[i])) {
      if (max > longest) {
        longest = max;
        max = 0;
      }
    } else {
      max++;
      set.add(str[i]);
    }
  }
  console.log(set.size);
}
// longestString("lokesh");

function anagramCheck(arr) {}

// anagramCheck(["eat","tea","tan","ate","nat","bat"]);

function duplicateRemove(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  console.log(arr);
}

// duplicateRemove([1,2,3,1,2,4,5]);

function duplicateFindAndRemove(arr) {
  let obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  console.log(result);
}

// duplicateFindAndRemove([1,2,3,1,23,3,4,5,7]);

const users = [
  { name: "Arun", role: "Developer" },
  { name: "Priya", role: "Designer" },
  { name: "Rahul", role: "Developer" },
  { name: "Anjali", role: "Manager" },
  { name: "Karan", role: "Designer" },
];

// Expected Output :

// {
//   Developer: ["Arun", "Rahul"],
//   Designer: ["Karan", "Priya"],
//   Manager: ["Anjali"]
// }

function accGivenCondition() {
  let result = {};

  for (let i = 0; i < users.length; i++) {
    let role = users[i].role;
    let name = users[i].name;

    if (result[role]) {
      result[role].push(name);
    } else {
      result[role] = [name];
    }
  }

  console.log(result);
}

// accGivenCondition();

const nestedObj = {
  user: {
    name: "Arun",
    address: {
      city: "Chennai",
      zip: 600001,
    },
  },
};

let result = {};
function flattenObj(obj, result) {
  for (let item in obj) {
    if (typeof item == "object" && !Array.isArray(item)) {
      console.log(obj);
    }
  }
}
// flattenObj(nestedObj,result);

function solvedProblme() {
  let objf = {
    name: "lokesh",
    age: 18,
  };
  let results = [];
  for (let items in objf) {
    results.push([items, objf[items]]);
  }
  console.log(results);
}
// solvedProblme()

function findLongestSubStr(str) {
  let longest = 0;
  let max = "";
  let set = new Set();
  str.split("").map((char) => {
    if (max.includes(char)) {
      if (max.length > longest) {
        set.add(max);
        console.log("aander");
        longest = max.length;
        max = "";
      }
      max += char;
    } else {
      max += char;
    }
  });

  console.log(max);
  console.log(set);
}
// findLongestSubStr('lokesh')

function longestSum(arr) {
  let longestSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (currentSum > longestSum) {
        longestSum = currentSum;
        currentSum = 0;
      }
      currentSum += arr[j];
    }
  }
  console.log(longestSum);
}
// longestSum([1,2,3,-4,5,6,-7])

function maxSubArr(arr) {
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  console.log(max);
}
// maxSubArr([1,2,3,-4,5,6,-7])

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1");

//     setTimeout(() => {
//       console.log("Timeout 2");
//     }, 0);
//   })
//   .then(() => {
//     console.log("Promise 2");
//   });

// async function test() {
//   console.log("Async Start");

//   await Promise.resolve();
// await Promise.resolve()
//   console.log("Async After Await");
// }

// test();

// console.log("End");

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// async function foo() {
//   console.log("C");

//   await bar();

//   console.log("D");
// }    // A C H E G F

// async function bar() {
//   console.log("E");

//   await Promise.resolve();

//   console.log("F");
// }

// foo();

// Promise.resolve().then(() => {
//   console.log("G");
// });

// console.log("H");

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("3");
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("4");
//   });

// async function test() {
//   console.log("5");
//   await Promise.resolve();

//   console.log("6");

//   await Promise.resolve();

//   console.log("7");
// }

// test();

// console.log("8");

// console.log("S");

//   setTimeout(() => {
//     console.log("T1");

//     Promise.resolve().then(() => {
//       console.log("P3");
//     });

//   }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("P1");

//     setTimeout(() => {
//       console.log("T2");
//     }, 0);
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("P2");
//   });

// async function foo() {
//   console.log("A1");

//   await Promise.resolve();

//   console.log("A2");

//   await Promise.resolve();

//   console.log("A3");
// }

// foo();

// console.log("E");

// var x = 1;

// function outer() {
//   console.log("A", x);

//   var x = 2;

//   function inner() {
//     console.log("B", x);

//     x = 3;

//     return function deep() {
//       console.log("C", x);
//     };
//   }

//   return inner;
// }

// const fn = outer();

// setTimeout(() => {
//   console.log("D", x);
// }, 0);

// Promise.resolve().then(() => {
//   console.log("E", x);
// });

// fn()();

// console.log("F", x);

// (function () {
//   console.log("G", x);
//   var x = 4;

//   setTimeout(() => {
//     console.log("H", x);
//   }, 0);
// })();

// console.log(a);

// var a = 10;

// function outer() {
//   console.log(a);

//   var a = 20;

//   function inner() {
//     console.log(a);

//     setTimeout(() => {
//       console.log(a);
//     }, 0);

//     Promise.resolve().then(() => {
//       console.log(a);
//     });

//     return function () {
//       console.log(a);
//     };
//   }

//   return inner;
// }

// const fn = outer();

// fn()();

// console.log(a);

// try {
//   console .log(b);
//   let b = 30;
// } catch (err) {
//   console.log("Error:", err.message);
// }

// let n = Symbol('hey');
// console.log(n);

// console.log(typeof NaN)

// console.log([]==false)

// let str1 = 'lokesh';
// let str2 = str1;

// str1[0] ='dangwal';
// str2 = 'name'
// console.log(str1);

// let hehe = {name:{
//   firstname:'lokesh'
// }}

// const copyhehe = structuredClone(hehe)
// copyhehe.name.firstname = 'chagedlokehs';
// console.log(copyhehe);

// console.log(a);
// const a = 38;

// var a = 10;
// var a = 9;
// console.log(a);

// function hey(name,age){
// this.name = name;
// this.age = age;
// console.log(this);
// return {
//   name:this.name,
//   age:this.age
// }
// }
// console.log(hey.call('lokesh',18));

// function foo(){
//   console.log('hey')
//   return foo;
// }
// console.log(foo()())

// const callObj  ={
//   name:'lokesh'
// }

// function hey2(){

//   const hey = ()=>{
//     console.log(this)
//   }
//   hey.call({
//     he34y:'loeksi'
//   });
// }
// hey2.call(callObj)

// const arrhey = [1,3,5,7,82,6,2];

// // const resulthey = arrhey.map((item)=>item>5);
// // console.log(resulthey)

// const resulthey = arrhey.map((val)=>{
//   if(val>5){
//     return val;
//   }
// });
// console.log(resulthey)

// function addSum (a){
//   return function(b){
//     return function (c){
//       console.log( a+b+c);
//     }
//   }
// }

// console.log(addSum(1)(2)(3));

// infinite currying

// function sum(a){
//   return function(b){
//   if(b == undefined) return a;
//   return sum(a+b);
//   }
// }
// console.log(sum(1)(2)(4)());

// function sumTarget (arr, target){
//   for(let i =0;i<arr.length;i++){
//     for(let j = i;j<arr.length;j++){
//       if(arr[i]+arr[j] == target){
//          return [i,j]
//       }
//     }
//   }
// }
// console.log(sumTarget([15,100,35,7,11],18))

// function foo(){
//   a = 10;
// }
// foo();
// console.log(a);

// function capitalFirstletter(str) {
//   return str.split(" ").map((word) => {
//     return word[0].toUpperCase() + word.slice(1);
//   });
// }
// console.log(capitalFirstletter("my name is lokesh dangwal").join(" "));

function missingItem(arr, n) {
  result = [];
  let isfind = false;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == i) {
        isfind = true;
        break;
      } else {
        isfind = false;
      }
    }
    if (!isfind) {
      console.log(i);
      isfind = false;
    }
  }
}

// missingItem([1, 4,5,2], 5);

// let a = 10;
// function foo(){
// console.log(a);
// var a = 20;
// console.log(a);
// }
// foo();




function computeValue() {
  let amount = 0;
  return {
    lacs: function (newAmount) {
      amount += newAmount * 100000;
      return this;
    },
    core: function (newAmount) {
      amount += newAmount * 10000000;
      return this;
    },
    thousand: function (newAmount) {
      amount += newAmount * 1000;
      return this;
    },
    value: function () {
      return amount;
    },
  };
}

console.log(
  computeValue().lacs(15).core(5).core(2).lacs(20).thousand(45).core(7).value(),
);
