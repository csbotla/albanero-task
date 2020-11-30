import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    id: "",
    name: "",
    value: "",
  });

  function handleNameInputChange(e) {
    document.getElementById("msg").innerHTML = "";
    setTask({ ...task, name: e.target.value });
  }
  function handleValueInputChange(e) {
    document.getElementById("msg").innerHTML = "";
    setTask({ ...task, value: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (task.name.length <= 0 && task.value.length <= 0) {
      setTask({ ...task, name: "", value: "" });
      document.getElementById("msg").innerHTML = "Name/Val can't be empty!";
    } else if (task.name.length <= 0) {
      document.getElementById("msg").innerHTML = "Name can't be empty!";
      setTask({ ...task, name: "", value: task.value });
    } else if (task.value.length <= 0) {
      console.log(task);
      document.getElementById("msg").innerHTML = "Value can't be empty!";
      setTask({ ...task, name: task.name, value: "" });
    }

    if (
      task.name.trim() &&
      task.name.length > 0 &&
      task.value.trim() &&
      task.name.length > 0
    ) {
      addTask({ ...task, id: Math.floor(10000000 + Math.random() * 90000000) });
      setTask({ ...task, name: "", value: "" });
      document.getElementById("name").focus();
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={task.name}
          onChange={handleNameInputChange}
          placeholder="Name*"
          id="name"
          className="name outline-none border-indigo-500 border-b-2 bg-white placeholder-gray-400 text-gray-800 w-1/8 h-50 m-5 py-2 px-4"
        />
        <input
          name="value"
          type="text"
          value={task.value}
          onChange={handleValueInputChange}
          placeholder="Value*"
          className="value outline-none border-indigo-500 border-b-2 bg-white placeholder-gray-400 text-gray-800 w-1/8 h-50 m-5 py-2 px-4"
        />
        <button
          type="submit"
          className="outline-none bg-gray-700 rounded-sm py-2 px-5 text-white hover:bg-gray-900"
        >
          Add
        </button>
      </form>
      <div id="msg"></div>
    </div>
  );
}

export default TaskForm;
