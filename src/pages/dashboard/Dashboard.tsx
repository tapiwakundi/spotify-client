import React from 'react'
import { Typography } from '../../components/Typography'
import { Page } from '../../containers/page'
import styles from './index.module.css'
import { FaUserCircle } from 'react-icons/fa'
import { useAuth } from '../../hooks/useAuth'
import SpotifyWebApi from "spotify-web-api-node";

type Props = {
    code?: string
}

type User = {
    display_name: string;
    email: string;
}

const spotifyApi = new SpotifyWebApi({
    clientId: "06c481fdcd4f4b95b5adab50779f4822",
});

export const Dashboard = ({ code }: Props) => {
    const accessToken = useAuth(code);
    const [user, setUser] = React.useState<User>()

    React.useEffect(() => {
        if (!accessToken) return;

        // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again. 
        spotifyApi.setAccessToken(accessToken);

        // Get user details with help of getMe() function
        spotifyApi.getMe().then(data => {
            setUser(data.body as User)
        })
    }, [accessToken]);

    return <Page>
        <section className={styles.profile_container}>
            {
                <FaUserCircle size={175} />
            }
            <Typography.Title1>{user?.display_name!}</Typography.Title1>

        </section>
    </Page>
}