import { SearchBar } from "app/components/SearchBar";
import { TodoItem } from "app/components/TodoItem";
import styles from "./page.module.css"
export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Dalog Todo List</h1>
      <SearchBar />
      <ul>  
      {[...Array(5)].map((_, index) => (
        <li key={index}>
          <TodoItem  />
        </li>
        
      ))}
      </ul>

  </div>
  );
}
