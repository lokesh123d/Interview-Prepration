// document.querySelector('div').addEventListener('click',function(){
//     alert('div')
// })
// document.querySelector('form').addEventListener('click',function(){
//     alert('form')
// })
// document.querySelector('button').addEventListener('click',function(e){
//     alert('button');
// e.stopImmediatePropagation()
// })
// document.querySelector('span').addEventListener('click',function(e){
//     alert('span')
// })


// const modalContainer = document.querySelector('.modalContainer')
// document.querySelector('button').addEventListener('click',function(e){
// modalContainer.style.display = 'flex'
// })

// modalContainer.addEventListener('click',function(e){
//     if(e.target.className =='modalContainer'){
//         modalContainer.style.display = 'none'

//     }
// })


// function findAll(str){
//     let arr = str.split('').reduce((acc,val)=>{
// (acc[val] = (acc[val]||0)+1);
//     return acc
        
//     },{})
//     console.log(arr);
// }

// findAll('lokeshl')



let obj = {
    name:"lokesh"
}

// // function hey(){
// //     console.log(this.name);
// // }

// const newobj = {
//     name:this.name
// }
// console.log(newobj.name)

// newobj.call(obj)
// hey.call(obj)


function test(){
    console.log(this)
    console.log(this.name)
}

const newtest = test.bind(obj)
newtest()