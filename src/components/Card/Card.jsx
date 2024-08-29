import React from 'react'
import styles from './Card.module.css'
const Card = () => {
  return (
    <div>
      <div className={styles.card}>
<img src="./images/greek salad.jpg" alt="salad" />
<article>
<div className={styles.titleDiv}>
<h4>Greek Salad</h4>
<p>$12.99</p>
</div>
<p className={styles.description}>
    Lorem ipsum, dolor sit amet consectetur
     adipisicing elit. Necessitatibus placeat
     
</p>
<p className={styles.price}>$12.99</p>

<div className={styles.deliveryDiv} >

<h5>Order delivery</h5>
<p>$4

</p>
</div>
</article>
      </div>
    </div>
  )
}

export default Card
