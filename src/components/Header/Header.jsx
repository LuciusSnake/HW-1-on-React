import React from 'react'
import logo from '../../assets/img/logo.svg'
import menu from './menu'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'


const Header = () => (
  <header>
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="" height={75} />
      </div>

      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item) => (
            <li key={item.link}>
              {/* <a href={item.link}>{item.title}</a> */}
              <Link to={item.link}>{item.title}</Link>
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
);

export default Header;
