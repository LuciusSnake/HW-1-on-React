import React from 'react'
import logo from '../../assets/img/logo.svg'
import menu from './menu'
import styles from './Header.module.scss'

const Header = () => {
  return (
   <header>
        <div className={styles.header}>
        <div className={styles.logo}>
            <img src={logo} alt=""  height={75}/>
        </div>

        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {menu.map((item, index) => (
                    <li key={`menu item ${index}`}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
                
            </ul>

            <div className={styles.authButtons}>
                <button className={styles.login}>Login</button>
                <button className={styles.signIn}>Sign In</button>
            </div>

        </div>
    </div>
   </header>
  )
}

export default Header