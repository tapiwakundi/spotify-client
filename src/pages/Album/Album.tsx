import React from "react"
import { useParams } from 'react-router-dom'
import { Album as AlbumModel, Track, ChartData } from '../../types'
import { Typography, TrackItem, FeatureAnalysis } from "../../components"
import { Page } from "../../containers"
import * as SpotifyApi from '../../api'
import styles from './index.module.css'
import moment from "moment"
import { processChartData } from '../../helpers/processChartData'

export const Album = () => {
    const { id } = useParams()
    const [album, setAlbum] = React.useState<AlbumModel | null>()
    const [albumTracks, setAlbumTracks] = React.useState<Track[]>()
    const [albumChartData, setAlbumChartData] = React.useState<ChartData[]>([])

    React.useEffect(() => {
        SpotifyApi.Albums.getAlbum(id!)
            .then(res => {
                setAlbum(res.data)
            })

        SpotifyApi.Albums.getTracksFromAlbum(id!)
            .then(res => {
                setAlbumTracks(res.data.items)
            })
    }, [])

    React.useEffect(() => {
        if (albumTracks) {
            SpotifyApi.Tracks
                .getAudioFeaturesForTracks(albumTracks)
                .then(res => {
                    const chartData = processChartData(res.data.audio_features)
                    setAlbumChartData(chartData)
                })
        }
    }, [albumTracks])

    if (!album || !albumTracks) {
        return <div>No album found...</div>
    }

    return <Page>
        <section className={styles.album_info_container}>
            <img src={album.images[0].url} alt="album cover" className={styles.album_cover} />
            <div className={styles.album_text_container}>
                <Typography.LargeTitle>{album.name}</Typography.LargeTitle>
                <Typography.Caption>{moment(album.release_date).format('ll')}</Typography.Caption>
                <Typography.Callout>{`${album.total_tracks} tracks`}</Typography.Callout>

            </div>
            <FeatureAnalysis chartData={albumChartData} />
        </section>
        <section>
            <Typography.Title1>Tracks</Typography.Title1>
            {albumTracks.map(track => <TrackItem track={track} album={album} />)}
        </section>
    </Page>
}