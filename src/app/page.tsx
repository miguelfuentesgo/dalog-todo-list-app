"use client";
import { useState } from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { AiOutlineCheck } from "react-icons/ai";
import { TodoItem } from "app/components/TodoItem";
import { TodoItems } from "app/components/TodoItems";
import { NewTodoButton } from "app/components/NewTodoButton";
import { CreateTaskDialog } from 'app/components/CreateTaskDialog';
import styles from "./page.module.scss"
import { TaskStatus } from "app/models/Task";

import { useTasks } from 'app/app/context/TasksContext';


export default function Home() {

  const [open, setOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const { tasks, addTask } = useTasks()

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  };

  const OnCreateTask = () => {
    if (newTaskTitle.trim() !== '') {
      let id = '1'
      if (tasks.length > 0) {
        id = (Number(tasks[tasks.length-1].id)+1).toString()
      }
      const newtask = { id : id, title: newTaskTitle, status: 'todo' as TaskStatus}

      console.log('new task ', newtask)
      addTask(newtask);
      setNewTaskTitle('');
      handleClose();
    } else {
      alert('Title cant be empty');
    }
  };

  
  return (
      <div className={styles.page}>
        <div className={styles.tasksContainer}>
            <div className={styles.todoTasks}>
              <div className={styles.titleContainer}>
                <AiOutlineClockCircle className={styles.icon}/>
                <h2>To do</h2>
              </div>
              <TodoItems>
              {tasks.filter((task) => (task.status === 'todo')).map((task) => (
                <li key={task.id}>
                  <TodoItem task={task}/>
                </li>

              ))}
              </TodoItems>
              {tasks.filter((task) => (task.status === 'todo')).length === 0 && <p className={styles.noTasks}>No tasks to do <AiOutlineClockCircle/></p>}
            </div>
            <div className={styles.doingTasks}>
              <div className={styles.titleContainer}>
                <AiOutlineLoading3Quarters className={styles.icon}/>
                <h2>Doing</h2>
              </div>
              <TodoItems>
              {tasks.filter((task) => (task.status === 'doing')).map((task) => (
                <li key={task.id}>
                  <TodoItem task={task}/>
                </li>

              ))}
              </TodoItems>
              {tasks.filter((task) => (task.status === 'doing')).length === 0 && <p className={styles.noTasks}>No tasks in progress <AiOutlineLoading3Quarters /></p>}
            </div>
            <div className={styles.doneTasks}>
            <div className={styles.titleContainer}>
                <AiOutlineCheck className={styles.icon}/>
                <h2>Done</h2>
              </div>
            <TodoItems>
              {tasks.filter((task) => (task.status === 'done')).map((task) => (
                <li key={task.id}>
                  <TodoItem task={task}/>
                </li>

              ))}
              </TodoItems>
              {tasks.filter((task) => (task.status === 'done')).length === 0 && <p className={styles.noTasks}>No tasks done yet <AiOutlineCheck/></p>}
            </div>
        </div>
        
        
        <NewTodoButton onClick={handleClickOpen}/>
        <CreateTaskDialog open={open} handleClose={handleClose} newTaskTitle={newTaskTitle} handleInputChange={handleInputChange} OnCreateTask={OnCreateTask}/>
      </div>
  );
}
