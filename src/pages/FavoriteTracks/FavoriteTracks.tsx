import React from 'react'
import { Page } from '../../containers/Page'
import styles from './index.module.css'
import * as SpotifyApi from '../../api'
import { Track } from '../../types'
import { TrackItem, Typography } from '../../components'
import { BsChevronRight } from 'react-icons/bs'

export const FavoriteTracks = () => {
    const [topTracks, setTopTracks] = React.useState<Track[]>([])

    React.useEffect(() => {
        SpotifyApi.User
            .getTopTracksShort()
            .then((res) => {
                setTopTracks(res.data.items)
            })
    }, []);

    return (
        <Page>
            <div className={styles.dashboard_container}>
                <div className={styles.title_container}>
                    <Typography.Title1>Favorite Tracks</Typography.Title1>
                    <a className={styles.see_more} href="/favorite-tracks">
                        <Typography.Callout2 className={styles.see_more_text}>see more</Typography.Callout2>
                        <BsChevronRight color="#929292" className={styles.chevron_right} />
                    </a>
                </div>
                {topTracks.map(track => <TrackItem track={track} />)}
            </div>
        </Page>
    )

}