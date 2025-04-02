"use client";
import { createContext, useContext, useState, ReactNode } from "react";
//Define the task structure
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Define the type of the context
interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

//Create the context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

//Provide the Context
export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTask] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTask([...tasks, newTask]);
  };
  const toggleTask = (id: number) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
//hook for the use of the context
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks should be use inside of TaskProvider");
  }
  return context;
}
