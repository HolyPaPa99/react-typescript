//mobx classes验证
// if (!new class { x:any; }().hasOwnProperty('x')) 
//     throw new Error('Transpiler is not configured correctly');

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(
    rootElement as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
