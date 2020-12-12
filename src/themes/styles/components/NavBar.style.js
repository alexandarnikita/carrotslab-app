import { StyleSheet } from 'react-native';
import fonts from '../../fonts';

export default colors =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20,
      width: '100%',
      height: 80,
      backgroundColor: colors.mainBg,
    },
    title: {
      flex: 1,
      paddingRight: 30,
      textAlign: 'center',
      ...fonts.h1
    }
  });
