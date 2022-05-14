export type ExternalUrl = {
    spotify: string
}

export type SpotifyImage = {
    height: number
    url: string
    width: number
}

export type SpotifyTotal = {
    href?: string;
    total: number
}
export type SpotifyOwner = {
    display_name: string
    external_urls: ExternalUrl
    href: string
    id: string
    type: string
    uri: string
}