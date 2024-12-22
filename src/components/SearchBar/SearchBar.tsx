import { AiOutlineSearch } from "react-icons/ai";
import styles from './SearchBar.module.scss'
export const SearchBar = () => {
    return (
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search your task here... " />
            <AiOutlineSearch className={styles.searchIcon}/>
        </div>
    );
} 