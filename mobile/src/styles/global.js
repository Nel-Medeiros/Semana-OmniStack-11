import styled, { createGlobalStyle } from "styled-components/native";
import Constants from "expo-constants";

//ok
export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 5}px;
  background: ${props => props.theme.colors.background};  
`;
//ok
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;  
`;
//ok
export const ButtonTouch = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
