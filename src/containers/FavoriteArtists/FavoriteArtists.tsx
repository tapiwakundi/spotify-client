import { Artist } from "../../types";
import styles from './index.module.css'
import { ArtistItem } from '../../components'

type Props = {
    artists: Artist[]
}

export const FavoriteArtists = ({ artists }: Props) => {
    return <div className={styles.main_container}>
        {artists.map(artist => <ArtistItem artist={artist} />)}
    </div>
}