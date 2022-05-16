
import { TrackItem } from '../../components';
import { Track } from '../../types';

type Props = {
    tracks: Track[]
}

export const FavoriteTracks = ({ tracks }: Props) => {
    return <div>
        {tracks.map(track => <TrackItem track={track} />)}
    </div>
}