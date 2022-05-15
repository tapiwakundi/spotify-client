import React from 'react'
import styles from './index.module.css'
import { Logo } from '../../components/Logo'
import { FiLogOut } from 'react-icons/fi'
export const NavBar = () => {
    return <nav className={styles.nav_container}>
        <Logo />
        <div className={styles.nav_options}>

        </div>
        <FiLogOut />

    </nav>
}