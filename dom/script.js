// const input = document.getElementById("myInput");


// const debouncedSearch = debounce((text) => {
//   console.log("Searching:", text);
// }, 600);

// input.addEventListener("input", (e) => {
//   debouncedSearch(e.target.value);
// });

// function debounce(func, delay) {
//     let timeoutId;
//     return function(...args) {
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }

//         timeoutId = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     };
// }



// event deligation 

// const customUI = document.createElement('ul');
// for (var i = 1; i <= 10; i++) {
//     const newElement = document.createElement('li');
//     newElement.textContent = "This is line " + i;
//     newElement.addEventListener('click', () => {
//         console.log('Responding')
//     })
//     customUI.appendChild(newElement);
// }
// document.body.appendChild(customUI)



// practice for the reflection 

// ------------current target and target 
// const button = document.querySelector('button');

// taget return the element where the event is occured 
// button.addEventListener('click',function(e){
//     console.log(e.target)
// })


// current target the element where the listener is attached
// button.addEventListener('click',function(e){
//     console.log(e.currentTarget);
// })



// defer = it doing a parrelaly html parsing and js fetching  and after completing the fetching it immediatly stop the html parsing and start the js execution and it have a one more drawback is to do not maintain the order of the script files it solve fist the small file and after completing the small file it move it in to the big file 

// async = it is works smoothly it will doing parrely html parsing and js fetching and after completing the js fecting it will wait to complete the html parsing and after comepleting the html parsing it will execute the js code and it will also maintain the order of the file 



// -------------scroll event 

// window.addEventListener('scroll',function(e){
    // console.log(this.scrollY)
    // console.log(this.innerHeight)
//    const total = this.document.body.scrollHeight;
//    console.log(total);
    
// })

// inside the scroll event mainly we have a three thing the first one is scrollheight it return the toal height of the webpage  and the second one is scrollheight is return how much pixel we scroll and  the third one is inner height return the pixel value whos is the size of the screen 



// ------------- prevent defalut 

// prevent defalut is preventing the form to submit so when we submit the form then our browser automatically reloade and this preventdelaut stop to reload the browser


//  ----------------- html collection and the nodelist 

// when we use a docuement.querySelector then it will return the node list and when we use a document.getelementbyclassnam and docuement.getEelementbytagname  then it will return the html collection 

//  and in the html collection we did not doing work with the for each like a iterate but on the other hand we also doin the for each on the nodelist thats the main diffrence and i have a one more diffrence with the html collection is live but the node list is a static 


// -----------------insert before
// if we want to insert befre then we will use a insertBefore 


// const button = document.querySelector('button');
// const span  = document.querySelector('span');
// const h1 = document.querySelector('h1');
// button.insertBefore(h1,span);





// --------------------- dom traversing ----------------------
// const parent = document.querySelector('.parent');
// const child1 = document.querySelector('.child1');
// const child2 = document.querySelector('.child2');
// const child3 = document.querySelector('.child3');
// const child4 = document.querySelector('.child4');

// parent.addEventListener('click',function(e){
// parent.firstElementChild.style.backgroundColor = 'red';
// });

// child1.addEventListener('click',function(e){
//     this.parentElement.style.backgroundColor = 'red';
// });

// child2.addEventListener('click',function(e){
//     this.nextElementSibling.style.backgroundColor = 'red';
// });

// child3.addEventListener('click',function(e){
//     this.previousElementSibling.style.backgroundColor = 'red';
// });

// child4.addEventListener('click',function(e){
//     this.parentElement.firstElementChild.style.backgroundColor = 'red';
// }); 









// ------------------ event bubbling and event capturing ------------------
// event bubbling is a process when we click on the child eleeent then the event will be propagate to the parent  elemet and after that it will be propagate to the grand parent element and this process is called event bubbling .

// event capturing is the process when we click on a parent elemtn then the eveletn will be propagate to the child element and this process is called event capturing .

// const grandParent = document.querySelector('.grandParent');
// const parent = document.querySelector('.parent');
// const child1 = document.querySelector('.child1');
// const child2 = document.querySelector('.child2');
// const child3 = document.querySelector('.child3');
// const child4 = document.querySelector('.child4');


// grandParent.addEventListener('click',function(e){
//     console.log('Grand Parent');
// },true);

// parent.addEventListener('click',function(e){
//     console.log('Parent');
// },true);

// child1.addEventListener('click',function(e){
//     console.log('Child 1');
//    e.stopPropagation();
// },true);

// child2.addEventListener('click',function(e){
//     console.log('Child 2');
// },true);

// child3.addEventListener('click',function(e){
//     console.log('Child 3');
// },true);

// child4.addEventListener('click',function(e){
//     console.log('Child 4');
// },true);


// stop propagation is a method which is used to stop the event bubbling and capturing and when we use this method then the event will not propgate to the parent element and also  not propagate to the child element and it will stop at the current element where we use this method it also run the event on the current element but it will not propagate to the parent and child element

// stop immediate propagation is a method which is used to stop the event bubbling and capturing and also stop the event on the current element and when we use this method then the event will not propgate to the parent element and also  not propagate to the child element and it will stop at the current element where we use this method it also stop the event on the current element as well as it will not propagate to the parent and child element




// ------------- insert adjustment element


// const insert = document.querySelector('.insert');
// const insertadjustmentbegin = document.querySelector('.insertadjustmentbegin');
// const insertadjustmentend = document.querySelector('.insertadjustmentend');

// const insertadjustmentbeforebegin = document.querySelector('.insertadjustmentbeforebegin');
// const insertadjustmentafterend = document.querySelector('.insertadjustmentafterend');


// insertadjustmentafterend.addEventListener('click',function(e){
//     insert.insertAdjacentHTML('afterend','<h1>After End</h1>');
// });

// insertadjustmentbeforebegin.addEventListener('click',function(e){
//     insert.insertAdjacentHTML('beforebegin','<h1>Before Begin</h1>');
// });     
// insertadjustmentbegin.addEventListener('click',function(e){
//     insert.insertAdjacentHTML('afterbegin','<h1>After Begin</h1>');
// });

// insertadjustmentend.addEventListener('click',function(e){
//     insert.insertAdjacentHTML('beforeend','<h1>Before End</h1>');
// });


