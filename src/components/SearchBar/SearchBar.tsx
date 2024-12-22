import { AiOutlineSearch } from "react-icons/ai";
import styles from './SearchBar.module.scss'

interface SearchBarProps {
    onChange: (value: string) => void;
}
export const SearchBar = ({onChange}:SearchBarProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value  as string)
    }
    return (
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Search your task here... " onChange={handleChange}/>
            <AiOutlineSearch className={styles.searchIcon}/>
        </div>
    );
} 