import React from "react";
import "../index.css";
import { useState } from "react";
import { useEffect } from "react";
const EditModal = ({ isVisible, setisVisible, editItem, setAllTask, allTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  function handleClose(e) {
    if (e.target.id === "outer") {
      setisVisible(false);
    }
  }

  useEffect(() => {
    const selectedTask = allTask.find((val) => val.id === editItem);
    if (selectedTask) {
      setTask(selectedTask.title || "");
      setPriority(selectedTask.priority || "");
    }
  }, [editItem, allTask, isVisible]);

  function handleSubmit() {
    const trimmedTask = task.trim();
    const newTask = allTask.map((val) => {
      if (val.id === editItem) {
        return {
          ...val,
          title: trimmedTask || val.title,
          priority: priority || val.priority,
        };
      }
      return val;
    });

    setAllTask(newTask);
  }

  return (
    <div
      id="outer"
      onClick={(e) => handleClose(e)}
      className={`bg-gray-200 left-0 h-screen w-full absolute top-0 justify-center items-center ${isVisible ? "flex" : "hidden"} `}
    >
      <div
        className="flex p-5 min-h-50 rounded-md font-bold justify-around items-center flex-col bg-white  w-100 gap-6 text-center"
        id="form"
      >
        <input
          type="text"
          placeholder="Add task here..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="taskCategory"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Task Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>{" "}
        <div className="flex gap-8">
          <button
            className="bg-gray-600 text-white px-5 rounded-md active:scale-95 hover:bg-gray-500 py-2"
            onClick={() => setisVisible(false)}
          >
            Cancle
          </button>
          <button
            className="bg-blue-500 text-white px-5 rounded-md active:scale-95 hover:bg-blue-400 py-2"
            onClick={() => {
              handleSubmit();
              setisVisible(false);
              alert("Task Updated Successfully");
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
