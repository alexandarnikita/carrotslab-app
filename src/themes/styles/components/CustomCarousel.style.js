import { StyleSheet } from 'react-native';
import fonts from '../../fonts';

export default colors =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20,
      width: '100%',
      height: 150,
      backgroundColor: colors.mainBg,
    },
    renderView: {
      width: 100,
      height: 100,
      padding: 10,
    },
    renderContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primaryBtnBg,
      borderRadius: 10,
    },
    episodeText: {
      color: colors.primaryBtnText,
      ...fonts.h2,
    },
  });
