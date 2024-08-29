import React from 'react'
import styles from './Title.module.css'
const Title2 = () => {
  return (
    <div>
          <section className={styles.sectionTitle2}>
            <div className={styles.titleDiv2}>
                <h1>Little Lemon</h1>
                <p>Chicago</p>
                <article>
                    Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Consequuntur esse architecto iusto autem, 
                     aspernatur minus ex voluptates tempore eius error distinctio
                     qui voluptatibus, perspiciatis nulla! Sed eos asperiores neque 
                     eligendi.
                </article>
            </div>
            <div className={styles.imageDiv2}>
                <div>
                <img className={styles.img1}  src="./images/man.jpg" alt="rest" />
                <img className={styles.img2} src="./images/men.jpg" alt="rest" />

                </div>
            </div>
        </section>
    </div>
  )
}

export default Title2
