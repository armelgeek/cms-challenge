import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import createStore from "../store";
import { AuthProvider } from "./AuthProvider";
class AppStoreProvider extends PureComponent {
  render() {
    // @ts-ignore
    const { children } = this.props;
    let { store } = createStore();
    return (
      <Provider store={store}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </Provider>
    );
  }
}

export default AppStoreProvider;
