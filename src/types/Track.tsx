import { Album } from "./Album"
import { Artist } from "./Artist"
import { ExternalUrl } from "./Common"

export type Track = {
    album: Album
    artists: Artist[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_urls: ExternalUrl
    id: string
    is_local: boolean
    name: string
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string
    uri: string
}

export type PlaylistTrack = {
    added_at: string
    track: Track
}
