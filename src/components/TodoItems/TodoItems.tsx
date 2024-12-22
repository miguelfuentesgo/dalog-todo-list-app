import styles from './TodoItems.module.scss'

interface TodoItemsProps  {
    children: React.ReactNode;
}
export const TodoItems: React.FC<TodoItemsProps> = ({children}) => {
    return (
        <div className={styles.TodoItems}>
            <ul>
                {children}
            </ul>
        </div>)
}