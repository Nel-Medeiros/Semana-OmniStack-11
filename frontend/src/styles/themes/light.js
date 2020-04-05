// Aqui são armazenadas as variáveis que serão usadas através do método useContext do componente ThemeContext do style-components
import lightLogo from "../../assets/logo.svg";
import darkIcon from "../../assets/moon.svg";
import heroesDay from "../../assets/Heroes Day.png";

export default {
  title: "light",
  logo: `${lightLogo}`,
  themeIcon: `${darkIcon}`,
  heroTheme: `${heroesDay}`,

  colors: {
    primary: "#0C090D",
    secondary: "#E02041",

    background: "#F0F0F5",
    text: "#0C090D",
    content: "#F5F5F5",
    input: "#FFF",
  },
};
