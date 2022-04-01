import React from 'react'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={style.aboutUs}>
        <div className={style.info}>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            sapiente ut ipsa amet quod aliquid delectus. Eum exercitationem
            adipisci ipsa!
          </p>
        </div>

        <div className={style.info}>
            <h3>Contacts</h3>
            
            <ul className={style.contacts}>
                <li><a href="tel:+375(29)123-45-67">+375(29)123-45-67</a></li>
                <li><a href="mailto:gun@gmail.com">gun@gmail.com</a></li>
                <li><a href="/">Welcome</a></li>
            </ul>
            
        </div>
      </div>
    </footer>
  )
}

export default Footer
