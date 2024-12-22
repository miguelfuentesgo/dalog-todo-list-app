import styles from './SearchBar.module.scss'
export const SearchBar = () => {
    return (
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search Todo " />
        </div>
    );
} 