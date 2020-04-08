import React from "react";

import { StateProvider } from "./state/ContextProvider";
import App from "../App";

import lightTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";

export default function Index() {
  const initialState = { theme: lightTheme };

  const reducer = (state, action) => {
    switch (action.type) {
      case "enableDarkMode":
        return {
          ...state,
          theme: darkTheme,
        };
      case "disableDarkMode":
        return {
          ...state,
          theme: lightTheme,
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  );
}
