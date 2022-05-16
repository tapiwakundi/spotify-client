import React from 'react'
import { useParams } from 'react-router-dom'
import { Page } from "../../containers"
import { AlbumItem, TrackItem, Typography } from '../../components'
import * as SpotifyApi from '../../api'
import { Album, Artist as ArtistModel, Track } from '../../types'
import styles from './index.module.css'
import { getUniqueAlbums } from '../../helpers/getUniqueAlbums'

export const Artist = () => {
    const [artist, setArtist] = React.useState<ArtistModel | null>(null)
    const [topTracks, setTopTracks] = React.useState<Track[] | null>([])
    const [albums, setAlbums] = React.useState<Album[] | null>([])
    const { id } = useParams()

    React.useEffect(() => {
        SpotifyApi.Artists.getArtist(id!)
            .then(res => {
                setArtist(res.data)
            })
        SpotifyApi.Artists.getTopTracksByArtist(id!)
            .then(res => {
                setTopTracks(res.data.tracks)
            })
        SpotifyApi.Artists.getAlbumsByArtist(id!)
            .then(res => {
                const uniqueAlbums = getUniqueAlbums(res.data.items)
                setAlbums(uniqueAlbums)
            })
    }, [])

    if (!artist || !topTracks || !albums) {
        return <div>Couldnt find this artist</div>
    }



    return <Page>
        <section className={styles.profile_container}>
            <img src={artist.images[0].url} alt="artist" className={styles.artist_image} />
            <Typography.Title1>{artist.name}</Typography.Title1>
            <div>
                { }
            </div>
        </section>
        <section>
            <Typography.Title1>Most popular tracks</Typography.Title1>
            {topTracks.map(track => <TrackItem track={track} />)}
        </section>

        <section>
            <Typography.Title1>Albums</Typography.Title1>
            <div className={styles.albums_grid}>
                {albums.map(album => <AlbumItem album={album} />)}
            </div>
        </section>
    </Page>
}