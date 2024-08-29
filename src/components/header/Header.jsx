import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (

    <div>
      <header className={styles.header}>
        <img className={styles.logo} src='./images/Logo.svg'></img>
        <nav>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order </a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
        <img className={styles.hamburger} src="./images/hamburger.svg" alt="" />
      </header>
    
    </div>
  )
}

export default Header
