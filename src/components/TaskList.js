import React from "react";
import Task from "./Task";

function TaskList({ tasks, removeTask }) {
  return (
    <div className="tasklist">
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} removeTask={removeTask}></Task>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
