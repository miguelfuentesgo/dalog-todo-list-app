"use client";
import { TaskContext } from 'app/app/context/TasksContext'
import { useContext, useState } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { TodoItems } from 'app/components/TodoItems';
import { TodoItem } from 'app/components/TodoItem';
import styles from './doing.module.scss'
import { SearchBar } from 'app/components/SearchBar';
export default function Doing() {
  const context = useContext(TaskContext)

  const [searchText, setSearchText] = useState("")

  const handleSearch = (value: string) => {
    setSearchText(value)
  }

  const filteredTasks = context?.doingTasks.filter((task) => task.title.toLowerCase().includes(searchText.toLowerCase()))

    return (
        
        <div className={styles.doingPage}>
          <div className={styles.titleContainer}>
                <AiOutlineLoading3Quarters className={styles.icon}/>
                <h2>Doing</h2>
          </div>
          <SearchBar onChange={handleSearch}/>
          <div className={styles.doing}>
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