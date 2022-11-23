import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TasksList from "./components/TasksList";
import TasksForm from "./components/TasksForm";

function App() {
  return (
    <div className="App">
      <TasksForm />
      <TasksList />
    </div>
  );
}

export default App;
