import React from "react"
import { useParams } from 'react-router-dom'
import { Album as AlbumModel, Track } from '../../types'
import { Typography, TrackItem } from "../../components"
import { Page } from "../../containers"
import * as SpotifyApi from '../../api'

export const Album = () => {
    const { id } = useParams()
    const [album, setAlbum] = React.useState<AlbumModel | null>()
    const [albumTracks, setAlbumTracks] = React.useState<Track[] | null>()
    React.useEffect(() => {
        SpotifyApi.Albums.getAlbum(id!)
            .then(res => {
                setAlbum(res.data)
            })

        SpotifyApi.Albums.getTracksFromAlbum(id!)
            .then(res => {
                setAlbumTracks(res.data.items)
            })
    }, [])

    if (!album || !albumTracks) {
        return <div>No album found...</div>
    }

    return <Page>
        <section>
            <img src={album.images[0].url} alt="album cover" />
            <Typography.Title1>Album info</Typography.Title1>
        </section>
        <section>
            <Typography.Title1>Tracks</Typography.Title1>
            {albumTracks.map(track => <TrackItem track={track} album={album} />)}
        </section>
    </Page>
}