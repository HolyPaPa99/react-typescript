import React from 'react';
import { MobXProviderContext, Provider } from 'mobx-react';
import userStore from '@ViewModels/User/UserStore';
const stores = {
    userStore,
};

export function useStores() {
    return React.useContext(MobXProviderContext);
}

export default function withStores(WrappedComponent: React.ComponentType) {
    return class extends React.Component {
        render() {
            return (
                <Provider {...stores}>
                    <WrappedComponent />
                </Provider>
            );
        }
    };
}