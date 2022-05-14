import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styles from './index.module.css'
import { Typography } from '../../components'
import { Playlist, ChartData } from '../../types';

type Props = {
    playlist: Playlist,
    chartData: ChartData[],
}

export const PlaylistWithAnalysis = ({ playlist, chartData }: Props) => {
    console.log(chartData);

    return <div className={styles.playlist_container}>
        <div className={styles.artist_container}>
            <img src={playlist.images[0].url} className={styles.playlist_image} alt="artist" />
            <div className={styles.text_container}>
                <Typography.Caption2>{playlist.name}</Typography.Caption2>
                <Typography.Caption>{playlist.tracks.total.toString()}</Typography.Caption>
            </div>
        </div>

        <ResponsiveContainer width="100%" height={320} className={styles.chart}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="label" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    </div>
}
