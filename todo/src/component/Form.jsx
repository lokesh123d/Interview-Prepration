import { useState } from "react";

const Form = ({ setAllTask, allTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newTask = {
      title: task,
      isCompleted: false,
      priority: priority,
      id: Date.now() + Math.random() * 334,
    };
    setAllTask([...allTask, newTask]);
  }






  return (
    <form
  onSubmit={handleSubmit}
  className="max-w-md mt-10 bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
>
  <h2 className="text-2xl font-semibold text-black mb-4 text-center">
    Add New Task
  </h2>

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
    className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select Task Priority</option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
  >
    Add Task
  </button>
</form>
  );
};

export default Form;
