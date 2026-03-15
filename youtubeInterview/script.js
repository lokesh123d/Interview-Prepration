// // let arr = [18, 10, 12, 15, 9, 11];

// // let result = [];
// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = i + 1; j < arr.length; j++) {
// //     if (arr[i] > arr[j]) {
// //       arr[i] = arr[i] + arr[j];
// //       arr[j] = arr[i] - arr[j];
// //       arr[i] = arr[i] - arr[j];
// //     }
// //   }
// // }

// // console.log(arr);

// // let arr = [11,3,34,5,5];
// // arr.splice(2,1,10,0);
// // console.log(arr);
// function buyItems(cartItemsCollection) {
//   validateCart(cartItemsCollection)
//     .then((cartId) => {
//         console.log('Cart is Created Now Make a Payment......')
//       return proceedToPayment(cartId);
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// function validateCart(cart) {
//   return new Promise((resolve, reject) => {
//     if (cart) {
//       setTimeout(() => {
//         resolve("lsdkjflkjsd8293kjfd");
//       }, 4000);
//     } else {
//       reject("Cart is not Valid");
//     }
//   });
// }

// function proceedToPayment(cartId) {
//   return new Promise((resolve, reject) => {
//     if (cartId) {
//       setTimeout(() => {
//         resolve("Payment Done...");
//       }, 9000);
//     } else {
//       reject("Payment Not Successfully...");
//     }
//   });
// }

// buyItems("hey i want to buy something");


// console.log([]==![])


// function abc(){
//     return
//      {
// name:'lokesh'
//     }
// }

// console.log(abc())


// const arr = [10,12,18,6,4];
// let target = 30;

// function findSum(arr,target){

//     for(let i = 0;i<arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){
//                 return [i,j]
//             }
//         }
//     }
// }

// console.log(findSum(arr,target))

// console.log('lokesh'-'dangwal');

// const str1 = 'lokesh'
// const str2 = 'dangwal'


// function alternativeStr(str1,str2){
//     let result = '';
//     let m = Math.max(str1.length, str2.length)
//    for(let i =0;i<m;i++){
//      if((str1.length-i)>1 && (str2.length-i)>1){
//         result+=(str1[i]+str2[i])
//      }else{
//         if((str1.length-1)>1){
//             result+=str1[i]
//         }else{
//             result+=str2[i];
//         }
//      }
//    }
//     return result


// }


// console.log(alternativeStr(str1,str2))


// let a = 19;
// let b = 20;
// a = a+b;
// b = a-b;
// a = a-b
// console.log( a,b)


// const obj = [{name:'lokesh',marks:34},{name:'lokesh2',marks:94},{name:'lokesh3',marks:34}]


// const result = obj.filter((val)=>{
//     if(val.marks>85){
//         return (val.name)
//     }
// })
// console.log(result);



// function hey(a,...b){
//     console.log(b)
// }
// hey(9,10,11,14)


// console.log(typeof null)

// console.log(isNaN ('lokesh'))


// console.log('start');

// setTimeout(function (){
//     console.log('time')
// },0)

// for(let i =1;i<10;i++){
//     console.log('block thread')
// }

// console.log('end')

const retries = 3;
const delay = 2000;

function dataFetch() {
  return new Promise((resolve, reject) => {
    const responseData = {
      name: "lokesh",
      passion: "web developer"
    };

    const statusCode = 300

    if (statusCode === 200) {
      resolve(responseData);
    } else {
      reject("Something went wrong");
    }
  });
}

function retry(callbackFunc, retries, delay) {
  callbackFunc()
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((err) => {
      if (retries > 0) {
        console.log(`Retrying... attempts left: ${retries}`);

        setTimeout(() => {
          retry(callbackFunc, retries - 1, delay);
        }, delay);
      } else {
        console.log("Failed after retries:", err);
      }
    });
}

retry(dataFetch, retries, delay);