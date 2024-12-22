"use client";
import { useRouter } from 'next/navigation';
import { Title } from 'app/components/Title';
import styles from './Navbar.module.scss';
import { useTasks } from 'app/app/context/TasksContext';

export const Navbar = () => {
    const router = useRouter();
    const { todoTasks, doingTasks, doneTasks} = useTasks();
  return (
    <nav className={styles.NavBar}>
        <Title />
      <ul className={styles.navList}>
        <li className={styles.navItem} onClick={() => router.push("/")}>
            Home
        </li>
        <li className={`${styles.navItem} ${todoTasks.length == 0 ? styles.itemDisabled : ''} ` } onClick={() => router.push("/todos")}>
          Todo
        </li>
        <li className={`${styles.navItem} ${doingTasks.length == 0 ? styles.itemDisabled : ''} ` } onClick={() => router.push("/doing")}>
            Doing
          
        </li>
        <li className={`${styles.navItem} ${doneTasks.length == 0 ? styles.itemDisabled : ''} ` } onClick={() => router.push("/done")}>
            Done      
        </li>
      </ul>
    </nav>
  );
};

