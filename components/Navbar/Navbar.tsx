// write navbar component here
import React from 'react';
import styles from './Navbar.module.css';
export const Navbar: React.FC = () => {
    return (
      <div className={styles.navbar}>
        <nav className={styles.navbar}>
          <div className={`${styles.navLeft} nav-left`}>
            <a href="/" >Home</a>
          </div>
          <div className={`${styles.navRight} nav-right`}>
            <ul className={styles.customList}>
              <li>
                <a href="/login">Login</a>
              </li>
              <li className={styles.registerButton}>
                <a href="/register"><button className={styles.registerButton}>Register</button></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  };
  
