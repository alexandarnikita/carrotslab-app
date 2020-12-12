import { StyleSheet } from 'react-native';
import fonts from '../../fonts';

export default colors =>
  StyleSheet.create({
    wrapperOuter: {
      flex: 1,
      backgroundColor: colors.mainBg,
    },
    container: {
      width: '100%',
      padding: 30,
    },
    filterGroup: {
      marginBottom: 20,
    },
    filterName: {
      ...fonts.h2,
      marginBottom: 10,
    },
    filters: {
      flexDirection: 'row',
    },
    optionText: {
      fontSize: 17,
      color: 'white',
    },
    buttons: {},
    footer: {
      alignItems: 'center',
    },
  });
