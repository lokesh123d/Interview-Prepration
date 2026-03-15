import React, { useEffect, useState } from 'react'

const InfiniteScroll = () => {

const [data, setData] = useState([]);

const [page,setPage] = useState(1)

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(data);
        setData([...data,...res]);
    })
},[page])


    return (
    <div>
        <button
        onClick={()=>setPage(prev=>prev+1)}
        >page increase</button>
    </div>
  )
}

export default InfiniteScroll