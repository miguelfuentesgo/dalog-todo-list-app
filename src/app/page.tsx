"use client";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import { SearchBar } from "app/components/SearchBar";
import { TodoItem } from "app/components/TodoItem";
import { TodoItems } from "app/components/TodoItems";
import { NewTodoButton } from "app/components/NewTodoButton";
import styles from "./page.module.scss"
import { TaskStatus } from "app/models/Task";

import { useTasks } from 'app/context/TasksContext';


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

      const newtask = { id : (Number(tasks[tasks.length-1].id)+1).toString(), title: newTaskTitle, status: 'todo' as TaskStatus}
      addTask(newtask);
      setNewTaskTitle('');
      handleClose();
    } else {
      alert('Title cant be empty');
    }
  };

  
  return (
      <div className={styles.page}>
      <SearchBar />

      <TodoItems>
      {tasks.map((task) => (
        <li key={task.id}>
          <TodoItem task={task}/>
        </li>

      ))}
      </TodoItems>
      <NewTodoButton onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add one new task</DialogTitle>
        <DialogContent>
          <TextField
          value={newTaskTitle}
          onChange={handleInputChange} 
          autoFocus
          label="Send email to..."
          multiline
          rows={4} // Número de líneas visibles
          variant="outlined" // Variante (puede ser "outlined", "filled", o "standard")
          fullWidth // Ocupa todo el ancho disponible
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={OnCreateTask}>Create task</Button>
        </DialogActions>
      </Dialog>
  </div>
  );
}
