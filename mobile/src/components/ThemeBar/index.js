// +++ EM TESTES +++//
import React, { useContext } from 'react';
import Switch from 'react-native';
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

export default function ThemeBar ({ toggleTheme }) {
    const { colors, title, themeIcon } = useContext(ThemeContext);

  return (
    <Container>
      <img src={themeIcon} alt="Be The Hero" width={40} />
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor={colors.text}
        offHandleColor={colors.secondary}
        onHandleColor={colors.text}
      />
    </Container>
  );
}
