import { NavLink } from 'react-router-dom'
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
    return <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/quotes' activeClassName={styles.active}>All Quotes</NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName={styles.active}>Add Quote</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation
