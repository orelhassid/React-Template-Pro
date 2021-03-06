import React, { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import ThemeProvider from "./theme";

import store from "../redux/store";
import { AuthContextProvider } from "./auth";
import { PostsContextProvider } from "./posts";
import { AlertContextProvider } from "./alert";
import AppLoading from "../components/AppLoading/AppLoading";
import { HelmetProvider } from "react-helmet-async";

export default function Provider({ children }) {
  const [isReady, setIsReady] = useState(false);
  return (
    <ThemeProvider>
      <ReduxProvider store={store}>
        <AlertContextProvider>
          <AuthContextProvider>
            <PostsContextProvider setIsReady={setIsReady}>
              <HelmetProvider>
                {isReady ? children : <AppLoading />}
              </HelmetProvider>
            </PostsContextProvider>
          </AuthContextProvider>
        </AlertContextProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
