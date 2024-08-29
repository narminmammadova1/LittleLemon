import React from 'react'
import styles from  "./Footer.module.css"
const Footer = () => {
  return (
    <>
<section className={styles.footerSection}>
    <div className={styles.imgDiv}><img src="./images/Logo.svg" alt="" />
    </div>
    <div className={styles.listDiv}> 
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Menu</li>
    <li>Reservations</li>
    <li>Order Online</li>
    <li>Login</li>
</ul>


<ul>
    <li>Contact</li>
    <li>Phone</li>
    <li>Email</li>
    <li>Adress</li>
</ul>

<ul>
    <li>Social media Links</li>
    <li>instagram</li>
    <li>Github</li>
    <li>Linkedin</li>
</ul>

    </div>
</section>
    </>
  )
}

export default Footer
