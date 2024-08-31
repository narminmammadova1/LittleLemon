import React from 'react'
import ReservationForm from '../../components/ReservationForm'
 import styles from "./ReservationPage.module.css"

const ReservationPage = () => {
  return (
    <div className={styles.reservPageDiv}>
      <header><img src="/svg/arrow.svg" alt="arrow" /></header>
      <div className={styles.titleDiv}>
        <h1>RESERVE  TABLE</h1>
      </div>
      <ReservationForm/>
    </div>
  )
}

export default ReservationPage
