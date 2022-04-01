import React from 'react'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <main>
        <div className={styles.contentWrapper}>
            <div className={styles.card}>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.</p>
                <button>Learn More</button>
            </div>

            <div className={styles.card}>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.</p>
                <button>Learn More</button>
            </div>

            <div className={styles.card}>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.</p>
                <button>Learn More</button>
            </div>
        </div>
    </main>
  )
}

export default Main