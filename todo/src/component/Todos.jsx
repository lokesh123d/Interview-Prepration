import React from "react";
import EditModal from "./EditModal";
import { useState } from "react";

const Todos = ({ setAllTask, allTask, visibleTasks = allTask }) => {

    const [isVisible, setisVisible] = useState(false);
    const [editItem, seteditItem] = useState('')

function handleDelete(id){
  let updatedTask =  allTask.filter((val)=>{
  if(val.id !== id) return val 
})
setAllTask(updatedTask);
}


function handleEdit(id){
    seteditItem(id)
    setisVisible(true)
}


  return (
   <div className="max-w-md mx-auto mt-6 space-y-4">
  {visibleTasks.map((val) => (
    <div
      key={val.id}
      className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
    >
      <h2 className="text-black font-medium">{val.title}</h2>

      <div className="flex gap-2">
        <button
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={()=>handleEdit(val.id)}
        >
          Edit
        </button>

        <button
          onClick={() => handleDelete(val.id)}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  ))}



  <EditModal isVisible={isVisible} editItem={editItem} allTask={allTask} setAllTask={setAllTask} setisVisible={setisVisible}/>
</div>
  );
};

export default Todos;

// add data and go in to the setdata and set in to local storage and if we want to filterit out then we show the filter data at the user as he want ok
