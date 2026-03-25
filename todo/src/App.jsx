import React, { useEffect, useMemo, useRef, useState } from 'react'
import Form from './component/Form'
import Todos from './component/Todos'

const App = () => {

const [allTask, setAllTask] = useState(JSON.parse(localStorage.getItem('TodoListTasks'))||[])
const [searchQuery, setsearchQuery] = useState('');
const [debouncedQuery, setDebouncedQuery] = useState('');
const timer = useRef(null)


useEffect(()=>{
  localStorage.setItem('TodoListTasks',JSON.stringify(allTask));
},[allTask])


useEffect(() => {
  return () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };
}, []);


function debounce(fn,delay){
  return function(...args){
    clearTimeout(timer.current);
    timer.current = setTimeout(()=>{
      fn(...args)
    },delay)
  }
}


function featuredTask(value){
  setDebouncedQuery(value);
}

const getSearchData = useMemo(() => debounce(featuredTask, 500), []);

const filteredTasks = useMemo(() => {
  return allTask.filter((val) =>
    val.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );
}, [allTask, debouncedQuery]);



  return (
    <div >
      <div className='flex justify-around'>
<Form  allTask={allTask} setAllTask={setAllTask}/>
<div className='flex flex-col text-center'>
  <h2 className='mt-10 text-2xl font-semibold '>Search Task</h2>
  <input type="text" placeholder='Search Task Here........'  value={searchQuery} onChange={(e)=>{
    const value = e.target.value;
    setsearchQuery(value)
    getSearchData(value);
   } }className="w-110 mt-10  p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-self-center"/>
</div>
</div>
<Todos allTask={allTask} visibleTasks={filteredTasks} setAllTask={setAllTask} />

    </div>
  )
}

export default App