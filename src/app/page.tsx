import { SearchBar } from "app/components/SearchBar";
import { TodoItem } from "app/components/TodoItem";
import { Title } from "app/components/Title";
import { TodoItems } from "app/components/TodoItems";
import { NewTodoButton } from "app/components/NewTodoButton";
import styles from "./page.module.scss"
export default function Home() {
  return (
    <div className={styles.page}>
      <SearchBar />

      <TodoItems>
      {[...Array(5)].map((_, index) => (
        <li key={index}>
          <TodoItem  />
        </li>
        
      ))}
      </TodoItems>
      <NewTodoButton />
  </div>
  );
}
