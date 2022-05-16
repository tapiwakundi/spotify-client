import React from "react"
import { useParams } from 'react-router-dom'
import { Album as AlbumModel, Track as TrackModel, ChartData } from '../../types'
import { Typography, TrackItem, FeatureAnalysis } from "../../components"
import { Page } from "../../containers"
import * as SpotifyApi from '../../api'
import styles from './index.module.css'
import moment from "moment"
import { processChartData } from '../../helpers/processChartData'

export const Track = () => {
    const { id } = useParams()
    const [track, setTrack] = React.useState<TrackModel | null>()
    const [trackChartData, setTrackChartData] = React.useState<ChartData[]>([])

    React.useEffect(() => {
        SpotifyApi.Tracks.getTrackInfo(id!)
            .then(res => {
                setTrack(res.track)
                console.log(res);

                const chartData = processChartData([res.audioFeatures])
                setTrackChartData(chartData)

            })
    }, [])

    if (!track) {
        return <div>No track found</div>
    }

    return <Page>
        <section className={styles.track_info_container}>
            <img src={track.album.images[0].url} alt="album cover" className={styles.album_cover} />
            <div className={styles.track_text_container}>
                <Typography.LargeTitle>{track.name}</Typography.LargeTitle>
                <Typography.Caption>{moment(track.album.release_date).format('ll')}</Typography.Caption>

            </div>
            <FeatureAnalysis chartData={trackChartData} />
        </section>
    </Page>
}