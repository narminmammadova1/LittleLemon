import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Confirmed.module.css"
const ConfirmedBooking = () => {
  const navigate = useNavigate();

  return (
    <div  className={styles.confDiv}>
      <h1 className={styles.confTitle}>Reservation Confirmed</h1>
      <p className={styles.confDesc} >Your table has been successfully reserved!</p>
      <button className={styles.confBtn} onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default ConfirmedBooking;
