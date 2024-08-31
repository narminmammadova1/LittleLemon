import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Headerr.module.css'; // Ensure the path is correct
import ROUTER from '../../Constant/Router';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src='./images/Logo.svg' alt='Logo' />
      <nav>
        <ul>
          <li><Link to={ROUTER.HOME}>Home</Link></li>
          <li><Link to={ROUTER.ABOUT}>About</Link></li>
          <li><Link to={ROUTER.RESERVATION}>Reservations</Link></li>
          <li><Link to={ROUTER.ORDER}>Order</Link></li>
          <li><Link to={ROUTER.LOGIN}>Login</Link></li>
        </ul>
      </nav>
      <img className={styles.hamburger} src="./images/hamburger.svg" alt="Menu" />
    </header>
  );
};

export default Header;