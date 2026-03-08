// function abc(){
//     console.log(abc.xyz);
// }
// abc();
// abc.xyz=400;
// abc.xyz=200;
// abc();


// console.log(typeof typeof 100);



// const arr = [...'lokesh']
// console.log(arr);



// console.log(parseInt('10+7'));
// console.log(parseInt('7FM'));
// console.log(parseInt('M7F'));


// console.log(isNaN('lokesh'));


// console.log([1,2].map(val=>{
//     if(val>0) return;
//     return val*2
// }))




// {
//     function abc(){
//         console.log('lokesh')
//     }
// }

// abc();





// let con = [1,1,3,4,6,7].map(function(val){
//     // return val;
//     // console.log(val);
// })
// console.log(con)



// function test() {
//   console.log(a);
//   console.log(b);
//   var a = 10;
//   let b = 20;
// }
// test();


// const obj = {
//   name: "Lokesh",
//   sayName(){
//     console.log(this.name);
//   }
// };

// const fn = obj.sayName;
// fn();




// const obj1 = {
//   name: "Lokesh",
//   address: {
//     city: "Delhi"
//   }
// };

// const obj2 = { ...obj1 };

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city);





// Write a function that finds the first non-repeating character.

function nonRepeat(str){
    let unique = new Set();
str.split('').forEach(elem => {
    if(!unique.has(elem)) unique.add(elem);
    else unique.delete(elem);
});
let ans = [...unique];
console.log(ans[0]);

};

nonRepeat('aabbccddefg')