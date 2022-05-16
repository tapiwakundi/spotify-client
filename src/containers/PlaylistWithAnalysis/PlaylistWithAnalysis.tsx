import styles from './index.module.css'
import { FeatureAnalysis, Typography } from '../../components'
import { Playlist, ChartData } from '../../types';

type Props = {
    playlist: Playlist,
    chartData: ChartData[],
}

export const PlaylistWithAnalysis = ({ playlist, chartData }: Props) => {
    return <div className={styles.playlist_container}>
        <div className={styles.artist_container}>
            <img src={playlist.images[0].url} className={styles.playlist_image} alt="artist" />
            <div className={styles.text_container}>
                <Typography.Caption2>{playlist.name}</Typography.Caption2>
                <Typography.Callout2>{`${playlist.tracks.total.toString()} tracks`}</Typography.Callout2>
            </div>
        </div>

        <FeatureAnalysis chartData={chartData} />
    </div>
}
