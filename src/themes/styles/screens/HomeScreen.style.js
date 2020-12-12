import { StyleSheet } from 'react-native';

export default colors =>
  StyleSheet.create({
    wrapperOuter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
      backgroundColor: colors.mainBg,
    },
    imgLogo: {
      width: '100%',
      height: 100,
    },
    imgLogo2: {
      marginTop: 'auto',
      width: '60%',
      height: 100,
      resizeMode: 'contain',
    },
    buttons: {
      marginVertical: 30,
    },
  });
