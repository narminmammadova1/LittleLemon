import React from 'react'
import styles from './Title.module.css'
import { useNavigate } from 'react-router-dom'
import ROUTER from '../../Constant/Router'
const Title = () => {

  const navigate=useNavigate()
  return (
    <div>
          <section className={styles.sectionTitle}>
            <div className={styles.titleDiv}>
                <h1>Little Lemon</h1>
                <p>Chicago</p>
                <article>
                "You can easily make a reservation at our restaurant for a delightful dining experience. We look forward to welcoming you and making your visit memorable!"
                </article>
                <button onClick={()=>navigate(ROUTER.RESERVATION)} >Reserve a table</button>
            </div>
            <div className={styles.imageDiv}>
                <div>
                <img  src="./images/rest2.jfif" alt="rest" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Title
