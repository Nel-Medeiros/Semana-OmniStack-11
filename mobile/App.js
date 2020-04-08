import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React, { useState } from "react";
import { Switch } from "react-native";
import { ThemeProvider } from "styled-components";
//import usePersistedState from './utils/usePersistedState'

import lightTheme from "./src/styles/themes/light";
import darkTheme from "./src/styles/themes/dark";

import Routes from "./src/routes";
//import ThemeBar from "./components/ThemeBar";

import { Container } from '../mobile/src/styles/global'

export default function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(prevState => ({
      value: !prevState
    }));

    //console.log(dark)
  };

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}> 
      <Container> 
      <Switch
        value={dark}
        onValueChange={toggleTheme}
        thumbColor="#424242"
        trackColor="#292929"        
      />    
      {/* <StatusBar barStyle={"dark-content"}> */}
        <Routes/>
      {/* </StatusBar> */}
      </Container>
    </ThemeProvider>
  );
}
