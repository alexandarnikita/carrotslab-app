import { StyleSheet } from 'react-native';

import fonts from 'themes/fonts';

export default colors =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      minHeight: 30,
      backgroundColor: '#eaf9fa',
      marginBottom: 10,
      borderRadius: 10,
    },
    image: {
      resizeMode: 'contain',
      width: 40,
      height: 40,
      marginRight: 20,
      borderRadius: 999,
    },
    name: {
      ...fonts.h2,
      color: '#415c85',
    },
    status: {
      borderRadius: 10,
      padding: 10,
      paddingVertical: 5,
      ...fonts.h3,
      backgroundColor: colors.primaryBtnBg,
    },
    alive: {
      backgroundColor: '#8cc178',
      color: 'white'
    },
    dead: {
      backgroundColor: '#d37466',
      color: 'white'
    },
    unknown: {
      backgroundColor: 'gray',
      color: 'white'
    }
  });
