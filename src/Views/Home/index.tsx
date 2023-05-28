import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function Home() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '20px' }}>
                <h1>Hello, World!</h1>
                <hr />
                <ul className={styles.ul}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="page1/1/2">Page1</Link>
                    </li>
                    <li>
                        <Link to="page2">Page2</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}

export default Home;