import React from "react";
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../Jsons/Tasks.json";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(title, desciption) {
    setTasks([
      ...tasks,
      {
        title: title,
        id: tasks.length,
        description: desciption,
      },
    ]);
  }

  function deleteTask(taskId) {
    tasks.filter((task) => task.id !== taskId);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
