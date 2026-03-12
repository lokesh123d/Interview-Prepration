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

function nonRepeat(str) {
  let unique = new Set();
  str.split("").forEach((elem) => {
    if (!unique.has(elem)) unique.add(elem);
    else unique.delete(elem);
  });
  let ans = [...unique];
  console.log(ans[0]);
}

// nonRepeat('aabbccddefg')

// foo();
// var foo = function(){
//     console.log('hey first');
// }

// foo();
// function foo(){
//     console.log('hey second');
// }
// foo();

// var a = 10;
// (()=>{
//     console.log(a);
//     a =20;
//     console.log(a);
// })();

// console.log(a);
// var a = 30;

// foo = 30;
// console.log(foo);
// var foo = 100;
// console.log(foo);

// a = 10;
// (()=>{
// b = 100;
// console.log(a);
// var b = 100;
// a = 20;
// console.log(a);
// })()
// console.log(b);
// console.log(a);
// var a = 30;

// for(var i =0;i<10;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }

// var fullName = "lokesh dangwal";

// var obj = {
//   fullName: "hacked Full Name",
//   prop: {
//     fullName: "insideFull Name",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
//   getFullName: function () {
//     return this.fullName;
//   },
//   getFullNameV2: () =>  this.fullName,
//   getFullNameV3: (function () {
//     return this.fullName;
//   })(),
// };

// console.log(obj.prop.getFullName());
// console.log(obj.getFullName());
// console.log(obj.getFullNameV2());
// console.log(obj.getFullNameV3());








// const lokesh = {
//   name: "lokesh dangwal",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// const john = {
//   name: "john deo",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// john.sayName.call(lokesh);




const lokesh ={
    name:"lokesh dangwal",
    sayName:function(){
        console.log(this.name)
    }
}

setTimeout(lokesh.sayName.bind(lokesh),3*1000);




