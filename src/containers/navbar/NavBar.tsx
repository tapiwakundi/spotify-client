import React from 'react'
import styles from './index.module.css'
import { Logo } from '../../components/Logo'

export const NavBar = () => {
    return <nav className={styles.nav_container}>
        <Logo />

    </nav>
}