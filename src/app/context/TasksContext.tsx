"use client";
import { useState } from 'react';
import { Task } from 'app/models/Task';
import { createContext, useContext, ReactNode } from 'react';

interface TaskContextType {
  tasks: Task[];
  todoTasks: Task[];
  doingTasks: Task[];
  doneTasks: Task[];
  setTasks: (tasks:Array<Task>) => void;
  addTask: (task: Task) => void;
}

// Create a context with a default value
export const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

const defaultTasks: Array<Task> = [
    {
      id: "1",
      title: "Cut onion",
      status: "todo",
    },
    {
      id: "2",
      title: "Run in the morning",
      status: "doing",
    },
    {
      id: "3",
      title: "Buy groceries",
      status: "done",
    },
    {
      id: "4",
      title: "Cut onion",
      status: "done",
    },
    {
      id: "5",
      title: "Run in the morning",
      status: "doing",
    },
    {
      id: "6",
      title: "Buy groceries",
      status: "done",
    },  
  ]

// Create a provider component to manage the theme state
export const TasksProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState(defaultTasks) //useState<Task[]>([]);
    
    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    }

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const doingTasks = tasks.filter((task) => task.status === "doing");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <TaskContext.Provider value={{ tasks, todoTasks, doingTasks, doneTasks, addTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to access the context
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};
