import React from 'react';

import { dark, light } from 'themes/colors';
import { darkTheme, lightTheme } from 'themes/styles';

const themes = {
  darkTheme,
  lightTheme,
};

const colors = {
  dark,
  light,
};

const ThemeContext = React.createContext({
  color: colors.light,
  theme: themes.lightTheme,
  toggle: () => {},
});

ThemeContext.displayName = 'ThemeContext';

export { ThemeContext, themes, colors };
