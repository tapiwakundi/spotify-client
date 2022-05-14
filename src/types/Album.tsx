import { Artist } from "./Artist"
import { ExternalUrl, SpotifyImage } from "./Common"

export type Album = {
    album_type: string
    artists: Artist[]
    external_urls: ExternalUrl
    href: string
    id: string
    images: SpotifyImage[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
}
