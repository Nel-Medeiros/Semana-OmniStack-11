// Aqui são armazenadas as variáveis que serão usadas através do método useContext do componente ThemeContext do style-components
import lightLogo from "../../assets/logo.png";
import darkIcon from "../../assets/moon.svg";

export default {
  title: "light",
  logo: `${lightLogo}`,
  themeIcon: `${darkIcon}`,  

  colors: {
    default: "#FFF",
    primary: "#0C090D",
    secondary: "#E02041",

    background: "#F0F0F5",
    text: "#13131A",
    property: "#41414D",
    value: "#737380",
    content: "#F5F5F5",   
  },
};