import { ExternalUrl, SpotifyImage, SpotifyTotal, SpotifyOwner } from "./Common";

export type Playlist = {
    collaborative: boolean;
    description: string
    external_urls: ExternalUrl
    href: string;
    id: string
    images: SpotifyImage[]
    name: string
    owner: SpotifyOwner;
    primary_color?: string
    public: boolean
    snapshot_id: string
    tracks: SpotifyTotal
    type: string
    uri: string
}
