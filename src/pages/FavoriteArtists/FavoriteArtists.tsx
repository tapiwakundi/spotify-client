import React from 'react'
import { Page } from '../../containers/Page'
import styles from './index.module.css'
import * as SpotifyApi from '../../api'
import { Artist } from '../../types'
import { ArtistItem, Typography } from '../../components'

export const FavoriteArtists = () => {
    const [topArtists, setTopArtists] = React.useState<Artist[]>([])

    React.useEffect(() => {
        SpotifyApi.User
            .getTopArtistsShort()
            .then((res) => {
                setTopArtists(res.data.items)
            })
    }, []);

    return (
        <Page>
            <div className={styles.dashboard_container}>
                <div className={styles.title_container}>
                    <Typography.Title1>Favorite Artists</Typography.Title1>
                </div>
                <div className={styles.artist_grid}>
                    {topArtists.map(artist => <ArtistItem artist={artist} />)}
                </div>
            </div>
        </Page>
    )

}