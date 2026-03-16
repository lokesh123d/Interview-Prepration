import React, { useEffect, useState } from 'react'
import './infinite.css'

const InfiniteScroll = () => {

const [data, setData] = useState([]);

const [page,setPage] = useState(1)

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        setData([...data,...res]);
    })
},[page])



window.addEventListener('scroll',function(){
    if(this.innerHeight+this.window.scrollY>this.document.documentElement.scrollHeight-1){
setPage(page+1);
    }
})



    return (
    <div className='container'>
     


        {data.map((items)=>{
            return (<div className='card' key={items.key+items.title[0]+Math.random()*200}>
{items.title}
            </div>)
        })}
    </div>
  )
}

export default InfiniteScroll