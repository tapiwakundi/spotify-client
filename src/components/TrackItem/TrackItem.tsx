import React from 'react'
import styles from './index.module.css'
import { Typography } from '../Typography'
import { Track, Album } from '../../types'

type Props = {
    track: Track
    album?: Album;
}

export const TrackItem = ({ track, album }: Props) => {
    const albumCover = track.album ? track.album.images[2].url : album?.images[2].url
    const albumName = track.album ? track.album.name : album?.name

    return <a className={styles.track_container} href={`/track/${track.id}`}>
        <img src={albumCover} className={styles.track_image} alt="album cover" />
        <div className={styles.text_container}>
            <Typography.Callout>{track.name}</Typography.Callout>
            <Typography.Callout2>{`${track.artists[0].name} • ${albumName}`}</Typography.Callout2>
        </div>
    </a>
}