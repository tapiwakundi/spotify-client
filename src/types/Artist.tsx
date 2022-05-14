import { ExternalUrl, SpotifyFollowers, SpotifyImage } from "./Common";

export type Artist = {
    external_urls: ExternalUrl;
    followers: SpotifyFollowers
    genres: string[];
    href: string
    id: string
    images: SpotifyImage[]
    name: string
    popularity: 92
    type: string
    uri: string
}