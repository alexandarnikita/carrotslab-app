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
    },
    detailInfoGroup: {
      flex: 1,
      marginTop: 30
    },
    detailInfo: {
      padding: 10,
      paddingLeft: 30,
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
  });
