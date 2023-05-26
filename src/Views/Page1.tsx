import React from 'react';
import { useParams } from 'react-router-dom';

export default class Page1 extends React.PureComponent {
    render() {
        const params = useParams();
        return (
            <div>
                <h1>page1</h1>
                <p>p1={params.p1}</p>
                <p>p2={params.p2}</p>
            </div>
        );
    }
}