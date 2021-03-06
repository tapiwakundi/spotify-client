import styles from './index.module.css'
import { loginUrl } from '../../utils/spotify'

export const Login = () => {
    return (
        <div className={styles.login}>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify-Logo" className={styles.image} />
            <a href={loginUrl} className={styles.loginButton}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}