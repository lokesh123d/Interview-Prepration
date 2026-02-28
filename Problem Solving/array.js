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