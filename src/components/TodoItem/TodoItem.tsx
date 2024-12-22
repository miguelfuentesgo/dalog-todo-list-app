import styles from './TodoItem.module.scss'
export const TodoItem = () => {
    return (
        <div className={styles.TodoItem}>
            <div className={styles.item__title}>
                <h3>Todo Item</h3>
            </div>
            <div className={styles.item__actions}>
                <select id="task-status" name="task-status">
                    <option value="todo">ToDo</option>
                    <option value="doing">Doing</option>
                    <option value="completed">Completed</option>
                </select>
            <button>Delete</button>
            </div>
        </div>
    );
}