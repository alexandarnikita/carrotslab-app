import { StyleSheet } from 'react-native';
import fonts from '../../fonts';

export default colors =>
  StyleSheet.create({
    wrapperOuter: {
      flex: 1,
      backgroundColor: colors.mainBg,
    },
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: 300,
      height: 300,
      alignSelf: 'center',
      margin: 30,
      borderRadius: 999999
    },
    detailInfoGroup: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    detailInfo: {
      padding: 10,
      paddingLeft: 30,
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
    },
    fieldName: {
      ...fonts.h2,
      width: '20%'
    },
    fieldValue: {
      ...fonts.h2,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 150,
      marginBottom: 30
    },
  });
