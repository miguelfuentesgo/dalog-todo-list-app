"use client";
import { TaskContext } from 'app/app/context/TasksContext'
import { useContext, useState } from 'react'
import { AiOutlineCheck } from "react-icons/ai";

import { TodoItems } from 'app/components/TodoItems';
import { TodoItem } from 'app/components/TodoItem';

import styles from './done.module.scss'
import { SearchBar } from 'app/components/SearchBar';
export default function Done() {
  const context = useContext(TaskContext)

    const [searchText, setSearchText] = useState("")

    const handleSearch = (value: string) => {
    setSearchText(value)
    console.log('handleSearch', value)
    }

    const filteredTasks = context?.doneTasks.filter((task) => task.title.toLowerCase().includes(searchText.toLowerCase()))
  
    return (
        
        <div className={styles.donePage}>
          <div className={styles.titleContainer}>
                <AiOutlineCheck className={styles.icon}/>
                <h2>Done</h2>
          </div>
          <SearchBar onChange={handleSearch}/>
          <div className={styles.done}>
              <TodoItems>
              {filteredTasks?.map((task) => (
                <li key={task.id}>
                  <TodoItem task={task}/>
                </li>

              ))}
              </TodoItems>
          </div>
            
        </div>
        
    )
}