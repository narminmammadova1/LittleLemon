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
                "Little Lemon restaurant was founded in 1989 in Chicago. Since then, we have been serving delicious, fresh dishes inspired by Mediterranean cuisine. Our cozy atmosphere and friendly staff make every visit special. We take pride in using locally sourced ingredients to ensure the highest quality in every meal."
                </article>
            </div>
            <div className={styles.imageDiv2}>
                <div>
                <img className={styles.img1}   src="/images/rest8.jfif" alt="rest"/>
                <img className={styles.img2} src="/images/rest1.jpeg" alt="rest" />

                </div>
            </div>
        </section>
    </div>
  )
}

export default Title2
