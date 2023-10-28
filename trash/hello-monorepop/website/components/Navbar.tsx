'use client';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <li className="Menu-Bar">
        <ion-icon name="heart"></ion-icon>
      </li>
      <li className="Logo">
        Navbar
      </li>
      <li className="Web3-Bar">Qwd423443543536654</li>
      <li className="Search-Bar">
        Search for Anything
      </li>
      <li className="Tools-Bar">
        <div >
        Tools
        </div>
      </li>
      
    </nav>
  )
}

export default Navbar