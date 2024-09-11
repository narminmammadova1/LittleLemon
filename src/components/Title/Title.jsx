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
                    Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Consequuntur esse architecto iusto autem, 
                     aspernatur minus ex voluptates tempore eius error distinctio
                     qui voluptatibus, perspiciatis nulla! Sed eos asperiores neque 
                     eligendi.
                </article>
                <button onClick={()=>navigate(ROUTER.RESERVATION)} >Reserve a table</button>
            </div>
            <div className={styles.imageDiv}>
                <div>
                <img  src="./images/restauranfood.jpg" alt="rest" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Title
