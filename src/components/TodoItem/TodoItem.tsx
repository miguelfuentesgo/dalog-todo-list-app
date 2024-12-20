import styles from './TodoItem.module.css'
export const TodoItem = () => {
    return (
        <div className={styles.TodoItem}>
            <div className={styles.item__title}>
                <h3>Todo Item</h3>
            </div>
            <div className={styles.item__actions}>
            <input type="checkbox" />
            <button>Delete</button>
            </div>
        </div>
    );
}