import { StyleSheet } from 'react-native';

export default colors =>
  StyleSheet.create({
    wrapperOuter: {
      flex: 1,
      backgroundColor: colors.mainBg,
    },
    scrollWrapper: {
      flex: 1,
      // backgroundColor: colors.mainBg,
      backgroundColor: 'gray',
    },
    scrollContentWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 80,
      paddingHorizontal: 50,
    },
  });
