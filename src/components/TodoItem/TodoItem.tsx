"use client"
import{ useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import  TextField from '@mui/material/TextField';

import { AiOutlineCloseCircle } from "react-icons/ai";


import { ConfirmationDialog } from '../shared/ConfirmationDialog';
import styles from './TodoItem.module.scss'
import { Task, TaskStatus } from 'app/models/Task';
import { useTasks } from 'app/app/context/TasksContext';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



interface TodoItemProps {
    task: Task;
}
export const TodoItem = ({task}:TodoItemProps) => {

    const [currentTask, setCurrentTask] = useState<Task>(task)
    const [updatedTask, setUpdatedTask] = useState<Task>(task)
    const [open, setOpen] = useState(false);
    const { tasks, setTasks } = useTasks();
    const [action, setAction] = useState('');
    const [editVersion, setEditVersion] = useState(false);
    const [ showActions, setShowActions] = useState(false)
    const titleConfirmationDialog =  action === 'update' ? `Are you sure you want to update from ${currentTask.status} to ${updatedTask.status} ?` : `Are you sure you want to delete this task ?`
    
    const EditButtonStyled = styled(Button)({
        color: '#000',
        border: '1px solid transparent',
        padding: '0',
        height: 'min-content',
        '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#000'
        }
    })

    const handleAction = (action: string) => {
        setAction(action)
        setOpen(true)
    }
    const handleSelectChange = (event: SelectChangeEvent) => {
        const value = event.target.value as string
        console.log('handle change')
        const newUpdatedTask = {
            ...currentTask,
            status: value as TaskStatus
        }
        setUpdatedTask(newUpdatedTask);
        console.log('value', value)
        if (value === 'done') {
            handleAction('update')
        } else {
            console.log(updatedTask.status)
            setCurrentTask(newUpdatedTask);

            const newTasks = tasks.map((task) => {
                if(task.id === currentTask.id) {
                    task.status = value as TaskStatus
                }
                return task
            })
            setTasks(newTasks)
        }
    };

    const handleConfirmAction =  () => {
        if(action === 'update') {
            setCurrentTask(updatedTask);
            const newTasks = tasks.map((task) => {
                if(task.id === currentTask.id) {
                    task.status = updatedTask.status as TaskStatus
                }
                return task
            })
            setTasks(newTasks)
        } else if (action === 'delete') {
            const newTasks = tasks.filter(task => task.id !== currentTask.id)
            setTasks(newTasks);
        }
        setOpen(false);
       
        
        
    };

    const handleCloseAction =  () => {  
        setUpdatedTask(currentTask);  
        setOpen(false);
    };

    const handleDeleteItem = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleAction('delete')
    }

    const handleCancelEdit = () => {
        setEditVersion(false)
        setShowActions(false)
    }

    const handleApplyChanges = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentTask(updatedTask);
        setEditVersion(false)
        setShowActions(false)
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as string;
        const newUpdatedTask = {
            ...currentTask,
            title: value
        }
        setUpdatedTask(newUpdatedTask);
    }

    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        setEditVersion(true)
    }
    return (
        <div className={styles.TodoItem} onMouseOver={()=>setShowActions(true)} onMouseOut={()=>setShowActions(false)}>
            {showActions && !editVersion ? <AiOutlineCloseCircle className={styles.item__closeIcon} onClick={handleDeleteItem}/> : null}
            {editVersion ? 
            <TextField 
                className={styles.item__input} 
                id="outlined-basic" 
                label="title task" 
                value={updatedTask.title} 
                variant="outlined" 
                onChange={handleChangeInput} 
                multiline
                rows={4} 
                fullWidth /> 
            : 
            <div className={styles.item__title}>
                <h3>{currentTask.title}</h3>
            </div>
            }
            <div className={styles.item__actions}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className={styles.FormControl}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentTask.status}
                    label="Age"
                    onChange={handleSelectChange}
                >
                    <MenuItem value={"todo"}>TODO</MenuItem>
                    <MenuItem value={"doing"}>DOING</MenuItem>
                    <MenuItem value={"done"}>DONE</MenuItem>
                </Select>
            </FormControl>
            {showActions && !editVersion ? <EditButtonStyled onClick={handleEdit} color='secondary'>Edit</EditButtonStyled> : null}
            {editVersion ?<div className={styles.actionsEditVersion}> <Button onClick={handleApplyChanges}>Apply Changes</Button> <Button onClick={handleCancelEdit}>Cancel</Button> </div> : null}
            </div>
            <ConfirmationDialog openDialog={open} title={titleConfirmationDialog} onConfirm={handleConfirmAction} onClose={handleCloseAction}/>
        </div>
    );
}