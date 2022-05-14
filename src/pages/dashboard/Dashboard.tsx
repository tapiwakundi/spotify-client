import React from 'react'
import { Page } from '../../containers/Page'
import styles from './index.module.css'
import { useAuth } from '../../hooks/useAuth'
import * as SpotifyApi from '../../api'
import { Track, User, Artist } from '../../types'
import * as SessionStorage from '../../utils/sessionStorage'
import { Profile, FavoriteArtists, TopTrackAnalysis, FavoriteTracks } from '../../containers'
import { Typography } from '../../components'

type Props = {
    code?: string
}


export const Dashboard = ({ code }: Props) => {
    const accessToken = useAuth(code);
    const [user, setUser] = React.useState<User>()
    const [topTracks, setTopTracks] = React.useState<Track[]>([])
    const [topArtists, setTopArtists] = React.useState<Artist[]>([])
    React.useEffect(() => {
        if (!accessToken) return;

        SpotifyApi.User.getUserInfo().then(data => {
            setUser(data.user)
            setTopArtists(data.topArtists.items)
            setTopTracks(data.topTracks.items)
            SessionStorage.setUserId(data.user.id)

        })

    }, [accessToken]);

    if (!user) {
        return null
    }



    return <Page>
        <div className={styles.dashboard_container}>
            <div className={styles.left_container}>
                <div>
                    <Typography.Title1>Favorite Artists</Typography.Title1>
                    <FavoriteArtists artists={topArtists.slice(0, 3)} />
                </div>

                <div>
                    <Typography.Title1>Top Tracks Analysis</Typography.Title1>
                    <TopTrackAnalysis />
                </div>

                <div>
                    <Typography.Title1>Favorite Tracks</Typography.Title1>
                    <FavoriteTracks tracks={topTracks.slice(0, 5)} />
                </div>

            </div>
            <div className={styles.profile_container}>
                <Profile user={user} />
            </div>
        </div>

    </Page>
}