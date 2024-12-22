import Link from 'next/link';
import { Title } from 'app/components/Title';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.NavBar}>
        <Title />
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

