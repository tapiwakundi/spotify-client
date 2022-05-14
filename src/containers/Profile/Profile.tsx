import { FaUserCircle } from 'react-icons/fa'
import { Typography } from '../../components/Typography'
import { User } from '../../types'
import styles from './index.module.css';

type Props = {
    user: User
}


export const Profile = ({ user }: Props) => {
    return <div className={styles.profile_container}>
        <FaUserCircle size={175} />
        <Typography.Title1>{user.display_name}</Typography.Title1>
    </div>
}