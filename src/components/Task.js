import React from "react";

function Task({ task, removeTask }) {
  function handleRemoveTask() {
    removeTask(task.id);
  }

  return (
    <div>
      <span className="outline-none bg-gray-100 text-indigo-500 w-1/8 h-50 mx-1 my-2 py-2 px-4 rounded-sm ring-opacity-0">
        {task.name}
      </span>
      <span className="outline-none bg-gray-100 text-indigo-500 w-1/8 h-50 mx-1 my-2 py-2 px-4 rounded-sm ring-opacity-0">
        {task.value}
      </span>
      <button
        onClick={handleRemoveTask}
        className="outline-white px-2 py-2 m-2 text-red-900 font-bold"
        title="delete"
      >
        X
      </button>
    </div>
  );
}

export default Task;
