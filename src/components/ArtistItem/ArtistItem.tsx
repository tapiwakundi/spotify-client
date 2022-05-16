import { Typography } from '../Typography';
import { Artist } from '../../types'
import styles from './index.module.css'
import { numberWithCommas } from "../../utils/numbersWithCommas";

type Props = {
    artist: Artist
}

export const ArtistItem = ({ artist }: Props) => {
    console.log('artist', artist);

    return <a className={styles.artist_container} href={`/artist/${artist.id}`}>
        <img src={artist.images[1].url} className={styles.artistImage} alt="artist" />
        <div className={styles.text_container}>
            <Typography.Caption2>{artist.name}</Typography.Caption2>
            <Typography.Caption>{`${numberWithCommas(artist.followers.total)} followers`}</Typography.Caption>
        </div>
    </a>
}