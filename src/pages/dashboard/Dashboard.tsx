import React from 'react'
import { Typography } from '../../components/Typography'
import { Page } from '../../containers/page'
import styles from './index.module.css'
import { FaUserCircle } from 'react-icons/fa'
const user = {
    name: 'Tapiwa Kundishora',
    followers: 89,
    following: 34,
    playlists: 3,
    profileImage: null
}

export const Dashboard = () => {
    return <Page>
        <section className={styles.profile_container}>
            {
                user.profileImage
                    ?
                    <img src={user.profileImage} />
                    : <FaUserCircle size={175} />
            }
            <Typography.Title1>{user.name}</Typography.Title1>

        </section>
    </Page>
}