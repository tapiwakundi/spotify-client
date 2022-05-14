import React from 'react'
import { NavBar } from '../Navbar'
import styles from './index.module.css'

type Props = {
    children: React.ReactNode
}

export const Page = ({ children }: Props) => {
    return <div className={styles.page}>
        <NavBar />
        <div className={styles.children}>
            {children}
        </div>
    </div>
}