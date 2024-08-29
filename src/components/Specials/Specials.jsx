import React from 'react'
import Card from '../Card/Card'
import styles from "./Specials.module.css"
const Specials = () => {
  return (
    <div>
      
      <section className={styles.specials}>
            <div className={styles.onlineMenu}>
                <h2>Specials</h2>
                <button>Online Menu</button>
            </div>
            <div className={styles.cards}>
                <Card/>
                <Card/>

                <Card/>

            </div>

        </section>
    </div>
  )
}

export default Specials
