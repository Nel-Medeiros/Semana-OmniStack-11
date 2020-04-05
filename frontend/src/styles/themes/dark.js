// Aqui são armazenadas as variáveis que serão usadas através do método useContext do componente ThemeContext do style-components
import darkLogo from "../../assets/darkLogo.png";
import lightIcon from "../../assets/sun.svg";
import heroesNight from "../../assets/Heroes Night.png";

export default {
  title: "dark",
  logo: `${darkLogo}`,
  themeIcon: `${lightIcon}`,
  heroTheme: `${heroesNight}`,

  colors: {
    primary: "#0D0D0D",
    secondary: "#E02041",

    background: "#121212",
    text: "#F5F5F5",
    content: "#202020",
    input: "#272727",
  },
};
