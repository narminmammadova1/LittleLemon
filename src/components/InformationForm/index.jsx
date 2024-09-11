import React from 'react'
import styles from "./Information.module.css"
const InformationForm = () => {
  return (
    <div className={styles.infoDiv}>

        
      <form action="">
<label for="res-date">Name</label>
<input className={styles.input} id="name" type="text" />
<label for="surname">Surname</label>
<input className={styles.input} id="surname" type="text" />

<label for="tel">Tel</label>
<input className={styles.input} id="tel" type="tel"  />
<label for="occasion">Email</label>
<input className={styles.input} id="email" type="email"  />

<button  className={styles.resBtn} type='submit'>Reserve</button>
      </form>
    </div>
  )
}

export default InformationForm
