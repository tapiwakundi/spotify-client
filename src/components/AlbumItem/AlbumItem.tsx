
import { Typography } from '../Typography'
import { Album } from '../../types'
import styles from './index.module.css'

type Props = {
    album: Album
}

export const AlbumItem = ({ album }: Props) => {
    return <a className={styles.album_container} href={`/album/${album.id}`}>
        <img src={album.images[1].url} className={styles.album_cover} alt="album" />
        <div className={styles.text_container}>
            <Typography.Caption2>{album.name}</Typography.Caption2>
            <Typography.Caption>{`${album.release_date} Album`}</Typography.Caption>
        </div>
    </a>
}