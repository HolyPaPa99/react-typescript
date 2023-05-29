import { useStores } from '@src/ViewModels';
import { observer } from 'mobx-react';
import React from 'react';
import { useParams } from 'react-router-dom';


function Page1() {
    const params = useParams();
    const { userStore } = useStores();
    return (
        <div>
            <h1>page1</h1>
            <p>p1={params.p1}</p>
            <p>p2={params.p2}</p>
            <p>{userStore.lang}</p>
        </div>
    );
}

export default observer(Page1);