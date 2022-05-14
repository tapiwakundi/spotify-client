import React from 'react'
import { Typography } from '../../components/Typography'
import { Page } from '../../containers/page'
import styles from './index.module.css'
import { FaUserCircle } from 'react-icons/fa'
import { useAuth } from '../../hooks/useAuth'
import * as SpotifyApi from '../../api'
import { Track, User } from '../../types'
import * as SessionStorage from '../../utils/sessionStorage'
type Props = {
    code?: string
}


export const Dashboard = ({ code }: Props) => {
    const accessToken = useAuth(code);
    const [user, setUser] = React.useState<User>()
    const [topTracks, setTopTracks] = React.useState<Track[]>([])

    React.useEffect(() => {
        if (!accessToken) return;

        SpotifyApi.User.getUserInfo().then(data => {
            setUser(data.user)
            SessionStorage.setUserId(data.user.id)
            console.log(data.topTracks.items[0]);

        })

    }, [accessToken]);

    if (!user) {
        return null
    }



    return <Page>
        <section className={styles.profile_container}>
            {
                <FaUserCircle size={175} />
            }
            <Typography.Title1>{user.display_name}</Typography.Title1>

        </section>
    </Page>
}