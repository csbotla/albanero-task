import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  });
  const [showcards, setShowCards] = useState(() => {
    const showcardsstatus = JSON.parse(localStorage.getItem("showCards"));
    console.log("ue", showcardsstatus);
    return showcardsstatus === "visible" ? "visible" : "invisible";
  });

  useEffect(() => {
    // console.log(tasks, '- Has changed')
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task) {
    setTasks([task, ...tasks]);
  }
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function showCards() {
    console.log(!showcards ? "show" : "dont show");
    setShowCards(showcards === "visible" ? "invisible" : "visible");
    localStorage.setItem(
      "showCards",
      JSON.stringify(showcards === "visible" ? "invisible" : "visible")
    );
  }

  function reset() {
    setTasks([]);
    setShowCards(false);
    localStorage.removeItem("showCards");
    localStorage.removeItem("tasks");
  }

  return (
    <div className="App">
      <h1 className="text-2xl">App</h1>
      <TaskForm addTask={addTask}></TaskForm>
      <TaskList tasks={tasks} removeTask={removeTask}></TaskList>
      <p>Total: {tasks.length}</p>
      <div>
        <button
          className="inline-block bg-gray-700 m-5 rounded-sm py-2 px-5 text-white hover:bg-gray-900"
          onClick={showCards}
        >
          Create Cards Toggle
        </button>
        <button
          className="inline-block bg-red-700 rounded-sm py-2 px-5 text-white"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      {showcards === "visible" ? (
        <CardList tasks={tasks}></CardList>
      ) : (
        <CardList tasks={[]}></CardList>
      )}
    </div>
  );
}

export default App;
