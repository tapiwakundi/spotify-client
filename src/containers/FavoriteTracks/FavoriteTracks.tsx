
import styles from './index.module.css'
import { Track } from '../../types'
import { Typography } from '../../components';

type Props = {
    tracks: Track[]
}

export const FavoriteTracks = ({ tracks }: Props) => {
    console.log(tracks);

    return <div>
        {tracks.map(track => {
            return <div className={styles.track_container}>
                <img src={track.album.images[2]?.url} className={styles.track_image} alt="album cover" />
                <div className={styles.text_container}>
                    <Typography.Callout>{track.name}</Typography.Callout>
                    <Typography.Callout2>{`${track.artists[0].name} • ${track.album.name}`}</Typography.Callout2>
                </div>
            </div>
        })}
    </div>
}