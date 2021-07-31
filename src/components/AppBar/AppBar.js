import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './AppBar.module.css';

const AppBar = () => {
    const isAuth = useSelector(authSelectors.getIsAuth);
    return (
        <nav className={styles.main__nav}>
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
        </nav>
    )
}


export default AppBar;