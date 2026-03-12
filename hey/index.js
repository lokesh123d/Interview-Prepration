// async function test() {
//   return 5;
// }

// console.log(test());



// async function test() {
//   throw new Error("Failed");
// }

// async function run() {
//   try {
//     await test();
//   } catch (e) {
//     console.log("Caught");
//   }
// }

// run();



// async function test() {
//   const val = await 10;
//   console.log(val);
// }

// test();



// console.log("A");

// async function test() {
//   console.log("B");

//   await Promise.resolve();

//   console.log("C");
// }

// test();

// console.log("D");

// Promise.resolve().then(() => console.log("E"));




// async function test() {
//   console.log(1);

//   await 0;

//   console.log(2);
// }

// console.log(3);

// test();

// console.log(4);



// let fruits = []
// let k =1;
// let newarr = [];
// for(let i =0;i<fruits.length;i++){
//     newarr[((i+k)%fruits.length)] = fruits[i]
// }
// console.log(newarr)




