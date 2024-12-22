import React from 'react';
import styles from './Footer.module.scss'
export const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <p>&copy; 2024 Dalog Todo List. All rights reserved.</p>
    </footer>
  );
};
