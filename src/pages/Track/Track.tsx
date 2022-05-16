import React from "react"
import { useParams } from 'react-router-dom'
import { Track as TrackModel, ChartData } from '../../types'
import { Typography, FeatureAnalysis } from "../../components"
import { Page } from "../../containers"
import * as SpotifyApi from '../../api'
import styles from './index.module.css'
import moment from "moment"
import { processChartData } from '../../helpers/processChartData'
import { formatDurationXMYS } from '../../helpers/formatDuration'
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
        <section className={styles.track_text_container}>
            <Typography.LargeTitle>{track.name}</Typography.LargeTitle>
            <Typography.Callout2>{track.album.name}</Typography.Callout2>
            <Typography.Callout2>{moment(track.album.release_date).format('ll')}</Typography.Callout2>
            <Typography.Callout2>{formatDurationXMYS(track.duration_ms)}</Typography.Callout2>
        </section>
        <section className={styles.track_info_container}>
            <img src={track.album.images[0].url} alt="album cover" className={styles.album_cover} />
            <FeatureAnalysis chartData={trackChartData} />
        </section>
    </Page>
}