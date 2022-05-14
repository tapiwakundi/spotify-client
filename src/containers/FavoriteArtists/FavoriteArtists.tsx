import { Artist } from "../../types";
import styles from './index.module.css'
import { Typography } from '../../components'

type Props = {
    artists: Artist[]
}

export const FavoriteArtists = ({ artists }: Props) => {
    return <div className={styles.main_container}>
        {
            artists.map(artist => {
                return <div className={styles.artist_container}>
                    <img src={artist.images[1].url} className={styles.artistImage} alt="artist" />
                    <div className={styles.text_container}>
                        <Typography.Caption2>{artist.name}</Typography.Caption2>
                        <Typography.Caption>{artist.followers.total.toString()}</Typography.Caption>
                    </div>
                </div>
            })
        }
    </div>
}