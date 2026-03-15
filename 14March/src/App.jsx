// import { useEffect, useRef, useState } from "react";
// import "./App.css";
// import ProductCard from "./ProductCard";

// const PAGE_SIZE = 20;

// function App() {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [error, setError] = useState("");
//   const sentinelRef = useRef(null);

//   async function fetchProducts() {
//     if (!hasMore) return;

//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${PAGE_SIZE}`
//       );

//       if (!res.ok) {
//         throw new Error("Failed to fetch products.");
//       }

//       const data = await res.json();

//       if (data.length < PAGE_SIZE) {
//         setHasMore(false);
//       }

//       setProducts(prev => {
//         // Avoid duplicates if the same page is requested more than once.
//         const existingIds = new Set(prev.map(item => item.id));
//         const incoming = data.filter(item => !existingIds.has(item.id));
//         return [...prev, ...incoming];
//       });
//     } catch (fetchError) {
//       setError(fetchError.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, [page]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         const firstEntry = entries[0];
//         if (firstEntry.isIntersecting && hasMore && !loading) {
//           setPage(prev => prev + 1);
//         }
//       },
//       { rootMargin: "250px" }
//     );

//     const currentSentinel = sentinelRef.current;
//     if (currentSentinel) {
//       observer.observe(currentSentinel);
//     }

//     return () => {
//       if (currentSentinel) {
//         observer.unobserve(currentSentinel);
//       }
//       observer.disconnect();
//     };
//   }, [hasMore, loading]);

//   return (
//     <div className="product-list-wrapper">
//       <h1 className="page-title">Infinite Scroll Products</h1>

//       <div className="product-grid">
//       {products.map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//       </div>

//       {error && <p className="status-message error">{error}</p>}
//       {loading && <p className="status-message">Loading more...</p>}
//       {!hasMore && !loading && (
//         <p className="status-message">You reached the end.</p>
//       )}

//       <div ref={sentinelRef} className="scroll-sentinel" aria-hidden="true" />
//     </div>
//   );
// }

// export default App





// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRef } from 'react'

// const App = () => {

// let timerId = useRef(null)
// let prevCall = useRef(0);

// const [data, setdata] = useState('')

// function debounce(func,delay){
//     clearTimeout(timerId.current);

//   timerId.current = setTimeout(()=>{
//     func();
//   },delay)


// }



// function callApi(){
//   console.log(data);
// }

//   return (
//     <div>

// <input type="text" onChange={(e)=>{
// setdata(e.target.value)
// debounce(callApi,2000)
// }} value={data} />


//     </div>
//   )
// }

// export default App





// import React from 'react'
// import { useRef } from 'react'

// const App = () => {
//   let prev = useRef(0);
//   let timerId = useRef(null)
//   function throttle(func ,delay){
// if(Date.now()-prev.current>=delay){
// prev.current = Date.now()
//   timerId.current = setTimeout(()=>{
// func();
//   },delay)
// }
//   }



//   function doSomething(){
//     console.log('mouse move is running')
//   }
  
//   return (
//     <div>

// <div

// onMouseMove={()=>{
//   console.log('hye')
//   throttle(doSomething,2000)
// }}
// >
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum porro reiciendis itaque asperiores esse nobis vitae hic quis aperiam dolorum corrupti adipisci, omnis eos tempora nemo earum alias quibusdam minus quo vero. Fugiat aliquid consectetur cum non vero soluta unde eum laudantium esse aliquam rem rerum maxime praesentium at dolores quod natus, ea repellendus reiciendis placeat commodi porro? Architecto enim cumque natus! Sunt cupiditate aperiam minus? Non minus rem delectus excepturi laudantium dignissimos hic deserunt quae libero quasi, voluptatem natus est architecto tempora eveniet recusandae, ipsam aliquid error autem id? Quam incidunt esse quia nam soluta autem? Reprehenderit sit repudiandae veritatis suscipit accusamus sint asperiores autem consequatur eveniet dolores placeat quisquam architecto magni earum temporibus doloribus hic, perspiciatis aut, et distinctio possimus dolorem ab deleniti. Itaque molestiae, earum dicta possimus corrupti laborum minus obcaecati quia beatae quam ex officia ipsa sit sequi praesentium neque saepe quaerat exercitationem vitae, voluptas odio quis vel voluptatum dolore? Quasi consequuntur inventore adipisci aperiam laborum velit, rem nostrum exercitationem expedita voluptates, aliquam, esse quis modi similique. Omnis sit atque quaerat odit animi temporibus consequuntur, unde nulla et! Ea quisquam laborum ab? Voluptate repellendus tenetur cupiditate delectus sit soluta fuga nam id placeat. Fuga, doloremque.
// </div>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

// const App = () => {



//   const [data, setdata] = useState([
//  {id:1,name:"Laptop"},
//  {id:2,name:"Phone"},
//  {id:3,name:"Tablet"}
// ])


// const [searchText, setsearchText] = useState('')




// let timerId = useRef(null)



// function debounce(func,delay){
//     clearTimeout(timerId.current);

//   timerId.current = setTimeout(()=>{
//     func();
//   },delay)
// }


// function searchFilter(){

// let newData = data.filter((val)=>{
//   if(val.name.toLocaleLowerCase() == searchText.toLocaleLowerCase().trim()){
//     return val
//   }
// })
// console.log(newData)

// }


//   return (
//     <div>
//       <input type="text" placeholder='search something.........'  onChange={(e)=>{
//        setsearchText(e.target.value)
//        debounce(searchFilter,2000)
//       }}
//       value={searchText}
//       />


// {
//   data.map((val)=>{
//     return (
//       <div key={val.id}>
// <h2>{val.name}</h2>
//       </div>
//     )
//   })
// }


//     </div>
//   )
// }

// export default App




