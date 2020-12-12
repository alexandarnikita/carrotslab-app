import { StyleSheet } from 'react-native';
import fonts from '../../fonts';

export default colors =>
  StyleSheet.create({
    wrapperOuter: {
      flex: 1,
      backgroundColor: colors.mainBg,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20,
      width: '100%',
      height: 100,
      backgroundColor: colors.mainBg,
    },
    searchInput: {
      height: 50,
      width: '90%',
      padding: 10,
      paddingLeft: 20,
      borderRadius: 10,
      borderStyle: 'solid',
      borderColor: '#415c85',
      borderWidth: 2,
      ...fonts.h2,
    },
    scrollWrapper: {
      flex: 1,
      backgroundColor: colors.mainBg,
    },
    scrollContentWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 5,
      paddingHorizontal: 20,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 100,
    },
    description: {
      marginBottom: 25,
      width: '100%',
      ...fonts.h2,
      color: colors.mainText,
    },
    buttons: {
      marginVertical: 10,
      width: '30%',
    },
    filterBtn: {
      color: '#415c85',
      marginLeft: 15
    }
  });
