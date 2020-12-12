import { StyleSheet } from 'react-native';

import fonts from 'themes/fonts';

export default colors =>
  StyleSheet.create({
    wrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      zIndex: 10,
      opacity: 0.3,
      backgroundColor: colors.mainBg,
    },
    title: {
      color: colors.backBtnText,
      ...fonts.h3,
    },
  });
