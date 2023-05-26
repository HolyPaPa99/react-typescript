import React from 'react'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import NavSideBar from '@src/Components/Navigation/NavSideBar';

class Home extends React.Component {

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '20px' }}>
                    <h1>Hello, World!</h1>
                    <hr />
                    <ul >
                        <li style={{listStyle: 'none'}}>
                            <Link to="/">Home</Link>
                        </li>
                        <li style={{listStyle: 'none'}}>
                            <Link to="page1/1/2">Page1</Link>
                        </li>
                        <li style={{listStyle: 'none'}}>
                            <Link to="page2">Page2</Link>
                        </li>
                    </ul>
                    <hr />
                    <NavSideBar />
                </div>
                <Outlet />
            </div>
        );
    }
}

export default Home;