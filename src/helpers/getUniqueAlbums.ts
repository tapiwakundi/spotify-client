import { Album } from '../types'

export function getUniqueAlbums(data: Album[]): Album[] {
    if (!data) return []
    return Array.from(new Set(data.map((a: Album) => a.release_date)))
        .map(date => {
            return data.find((a: Album) => a.release_date === date)!
        })
}