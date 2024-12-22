import styles from './NewTodoButton.module.scss'

interface NewTodoButtonProps {
    onClick: () => void;
}
export const NewTodoButton = ({onClick}:NewTodoButtonProps) => {
    return (
        <div className={styles.NewTodoButton} onClick={onClick}>
            <button>
                +
            </button>
        </div>
        
    )
}