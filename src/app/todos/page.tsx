"use client";
import { TaskContext } from 'app/app/context/TasksContext'
import { useContext, useState } from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";

import { TodoItems } from 'app/components/TodoItems';
import { TodoItem } from 'app/components/TodoItem';
import styles from './todos.module.scss'
import { SearchBar } from 'app/components/SearchBar';
export default function Todos() {
  const context = useContext(TaskContext)
  const [searchText, setSearchText] = useState("")

  const handleSearch = (value: string) => {
    setSearchText(value)
    console.log('handleSearch', value)
}

const filteredTasks = context?.todoTasks.filter((task) => task.title.toLowerCase().includes(searchText.toLowerCase()))
  
    return (
        
        <div className={styles.todosPage}>
          <div className={styles.titleContainer}>
                <AiOutlineClockCircle className={styles.icon}/>
                <h2>To do</h2>
          </div>
          <SearchBar onChange={handleSearch}/>
          <div className={styles.todos}>
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