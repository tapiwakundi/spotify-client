import React from 'react'
import styles from './index.module.css'
import { Typography } from '../Typography'
import { Track } from '../../types'

type Props = {
    track: Track
}

export const TrackItem = ({ track }: Props) => {
    return <div className={styles.track_container}>
        <img src={track.album.images[2]?.url} className={styles.track_image} alt="album cover" />
        <div className={styles.text_container}>
            <Typography.Callout>{track.name}</Typography.Callout>
            <Typography.Callout2>{`${track.artists[0].name} • ${track.album.name}`}</Typography.Callout2>
        </div>
    </div>
}