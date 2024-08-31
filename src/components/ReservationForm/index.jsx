import React from 'react'
import styles from "./Reservation.module.css"
const ReservationForm = () => {
  return (
    <div className={styles.formDiv}>
      <form action="">
<label for="res-date">Date</label>
<input className={styles.input} id="res-date" type="date" />
<label for="res-time">Time</label>
<select id="res-time">
    <option value="">17:00</option>
    <option value="">18:00</option>
    <option value="">19:00</option>
    <option value="">20:00</option>
    <option value="">21:00</option>
    <option value="">22:00</option>
</select>
<label for="guests">Number of guests</label>
<input className={styles.input} id="guests" type="number" min="1" max="10" />
<label for="occasion">Occasion</label>
<select id="occasion">

<option value="">Birthday</option>
<option value="">Anniversary</option>

</select>

<label htmlFor="place">Place</label>
<div className={styles.radio}>
<label htmlFor="outside">
<input id='outside' checked className={styles.radiobtn} name='place' value="outside" type="radio" /> Outside
</label>

<label htmlFor="inside">
<input id="inside" className={styles.radiobtn}  value="inside" name='place' type="radio" />Inside</label>
</div>


<button  className={styles.resBtn} type='submit'>Reserve</button>
      </form>
    </div>
  )
}

export default ReservationForm
