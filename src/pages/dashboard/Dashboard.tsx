import React from 'react'
import { Page } from '../../containers/Page'
import styles from './index.module.css'
import { useAuth } from '../../hooks/useAuth'
import * as SpotifyApi from '../../api'
import { Track, User, Artist, Playlist, PlaylistTrack } from '../../types'
import * as SessionStorage from '../../utils/sessionStorage'
import { Profile, FavoriteArtists, PlaylistWithAnalysis, FavoriteTracks } from '../../containers'
import { Typography } from '../../components'
import { BsChevronRight } from 'react-icons/bs'
import { findAverage } from '../../utils/averages'
import { processChartData } from '../../helpers/processChartData'
type Props = {
    code?: string
}

type ChartData = {
    label: string
    A: number
    fullMark: number
}


export const Dashboard = () => {
    const [user, setUser] = React.useState<User>()
    const [topTracks, setTopTracks] = React.useState<Track[]>([])
    const [topArtists, setTopArtists] = React.useState<Artist[]>([])
    const [playlists, setPlaylists] = React.useState<Playlist[]>([])
    const [playlistTracks, setPlaylistTracks] = React.useState<PlaylistTrack[]>([])
    const [playlistChartData, setPlaylistChartData] = React.useState<ChartData[]>([])

    React.useEffect(() => {
        SpotifyApi.User.getUserInfo()
            .then(data => {
                setUser(data.user)
                setTopArtists(data.topArtists.items)
                setTopTracks(data.topTracks.items)
                setPlaylists(data.playlists.items)
                SessionStorage.setUserId(data.user.id)
            })

    }, []);

    React.useEffect(() => {
        if (playlists?.length > 0) {
            SpotifyApi.Playlists
                .getPlaylistTracks(playlists[2].id)
                .then(res => {
                    console.log(res.data.items);

                    setPlaylistTracks(res.data.items)
                })
        }
    }, [playlists])

    React.useEffect(() => {
        if (playlistTracks?.length > 0) {
            SpotifyApi.Tracks
                .getAudioFeaturesForTracks(playlistTracks.map(track => track.track))
                .then(res => {
                    const chartData = processChartData(res.data.audio_features)
                    setPlaylistChartData(chartData)
                })
        }
    }, [playlistTracks])

    if (!user) {
        return null
    }

    return <Page>
        <div className={styles.dashboard_container}>
            <div className={styles.left_container}>
                <div>
                    <div className={styles.title_container}>
                        <Typography.Title1>Favorite Artists</Typography.Title1>
                        <a className={styles.see_more} href="/favorite-artists">
                            <Typography.Callout2 className={styles.see_more_text}>see more</Typography.Callout2>
                            <BsChevronRight color="#929292" className={styles.chevron_right} />
                        </a>
                    </div>
                    <FavoriteArtists artists={topArtists.slice(0, 3)} />
                </div>

                <div>
                    <Typography.Title1>Playlist Analysis</Typography.Title1>
                    <PlaylistWithAnalysis playlist={playlists[2]} chartData={playlistChartData} />
                </div>

                <div>
                    <div className={styles.title_container}>
                        <Typography.Title1>Favorite Tracks</Typography.Title1>
                        <a className={styles.see_more} href="/favorite-tracks">
                            <Typography.Callout2 className={styles.see_more_text}>see more</Typography.Callout2>
                            <BsChevronRight color="#929292" className={styles.chevron_right} />
                        </a>
                    </div>
                    <FavoriteTracks tracks={topTracks.slice(0, 5)} />
                </div>

            </div>
            <div className={styles.profile_container}>
                <Profile user={user} />
            </div>
        </div>

    </Page>
}