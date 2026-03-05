const { use } = require("react");

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




const anagram =(s,t)=>{
if(s.length!=t.length) return false 

let obj1 ={};
let obj2 ={};

for(let i =0;i<s.length;i++){
  obj1[s[i]] = (obj1[s[i]] ||0)+1;
  obj2[t[i]] = (obj2[t[i]]||0)+1; 
}

for(let key in obj1){
  if (obj1[key] != obj2[key] )return false;
}
return true



}
// console.log(anagram('anagram','nagaram'));



const twoSumTarget=(nums,target)=>{

  let set = new Set(nums);
for(let i =0;i<nums.length;i++){
  let expect = target-nums[i];
  if(expect==nums[i]) continue; 
  if(set.has(expect)) return [i,nums.indexOf(expect)];
}
}
// console.log(twoSumTarget([3,2,4],6))

const user ={
  name:"lokesh",
  logname(){
    console.log(this.name);
  }
}

setTimeout(user.logname.call(user),1000)