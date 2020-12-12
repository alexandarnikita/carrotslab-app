import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { ThemeContext } from 'contexts/ThemeContext';

const NavBar = ({ children, style, title, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const baseStyles = theme.components.NavBar;

  return (
    <View style={[baseStyles.wrapper, style]} {...props}>
      {children}
      <Text style={baseStyles.title}>{title}</Text>
    </View>
  );
};

export { NavBar };
