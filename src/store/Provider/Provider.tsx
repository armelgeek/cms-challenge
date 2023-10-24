import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import createStore from "../store";
class AppStoreProvider extends PureComponent {
  render() {
    // @ts-ignore
    const { children } = this.props;
    let { store, persistor } = createStore();
    return (
      <Provider store={store}>
          {children}
      </Provider>
    );
  }
}

export default AppStoreProvider;
