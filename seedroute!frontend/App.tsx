import * as React from "react";
import AppNavigator from "./app/Navigations/app.navigator";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider >
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}
