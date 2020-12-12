import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import store from 'store';
import { Navigation } from 'Navigation';
import { ThemeContext, themes, colors } from 'contexts/ThemeContext';

import { getTheme, storeTheme } from 'utils/storage';

const App = () => {
  const [theme, setTheme] = useState(themes.lightTheme);
  const [color, setColor] = useState(colors.light);

  useEffect(() => {
    // Get active theme from storage
    getTheme().then(storedTheme => {
      console.log(`App: Theme stored: ${storedTheme}, restoring`);
      setTheme(storedTheme === 'dark' ? themes.darkTheme : themes.lightTheme);
      setColor(storedTheme === 'dark' ? colors.dark : colors.light);
    });
  }, []);

  // Toggle Theme
  const toggle = () => {
    console.log(`App: Theme toggle ${theme === themes.lightTheme ? 'dark' : 'light'}`);

    // Save to storage for next run
    storeTheme(theme === themes.lightTheme ? 'dark' : 'light');

    // Toggle theme
    setTheme(theme === themes.lightTheme ? themes.darkTheme : themes.lightTheme);
    setColor(theme === themes.lightTheme ? colors.dark : colors.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, color, toggle }}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
