import React from 'react'
import { Provider } from 'mobx-react'
import userStore from "@ViewModels/User/UserStore"
const stores = {
  userStore,
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