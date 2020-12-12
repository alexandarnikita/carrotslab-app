import { StyleSheet } from 'react-native';

import fonts from 'themes/fonts';

export default colors =>
  StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      paddingHorizontal: 30,
      paddingVertical: 15,
      minHeight: 30,
      backgroundColor: colors.primaryBtnBg,
    },
    wrapperDisabled: {
      backgroundColor: colors.primaryBtnDisabledBg,
    },
    title: {
      ...fonts.h2,
      color: colors.primaryBtnText,
    },
    titleDisabled: {
      color: colors.primaryBtnDisabledText,
    },
  });
