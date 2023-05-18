import React from 'react';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://img.liangzipic.com/upload/vod/20230511-1/c3fb548ca10a575386e167342a02d973.jpg',
    imageSize: 190
};

export default function App() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: 'auto',
                    height: 'auto',
                    borderRadius: '20px'
                }}
            />
        </>
    );
}