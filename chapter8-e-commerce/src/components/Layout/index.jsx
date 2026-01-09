import React from 'react'
import { Outlet, Link } from 'react-router'
import styles from './Layout.module.css'

const Layout = () => {
    return (
        <div className={styles.container}>
            <Link to='/'>
                <h1>멋사몰</h1>
            </Link>

            <ul>
            </ul>
            <Outlet />
        </div>
    )
}

export default Layout