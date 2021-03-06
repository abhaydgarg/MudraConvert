import { StyleSheet, Platform, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import DeviceInfo from 'react-native-device-info';

export default function (vars) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: vars.colors.white
    },
    topContainer: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + 10 : getStatusBarHeight() - 10,
    },
    bottomContainer: {
      flex: 1
    },
    topContainerHeader: {
      height: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    topContainerHeaderDate: {
      fontFamily: vars.fonts.numeric,
      fontSize: vars.fontSize.medium
    },
    topContainerSymbol: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: 10
    },
    topContainerSymbolView: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 65,
      height: 40,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      backgroundColor: vars.colors.white
    },
    topContainerSymbolText: {
      fontWeight: 'bold',
      fontSize: 23
    },
    topContainerBody: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    topContinerBodyContent: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    topContainerBodyInput: {
      flex: 1,
      marginHorizontal: 10,
      fontFamily: vars.fonts.numeric,
      color: vars.colors.white,
      fontSize: vars.fontSize.input,
      borderColor: vars.colors.white,
      borderBottomWidth: 1,
      padding: 0
    },
    topContainerSendIcon: {},
    topContainerActivityIndicator: {},
    bottomContainerSymbol: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: 10
    },
    bottomContainerSymbolView: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 65,
      height: 40,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      backgroundColor: vars.colors.primary,
      paddingHorizontal: 5
    },
    bottomContainerSymbolText: {
      fontWeight: 'bold',
      fontSize: 23
    },
    bottomContainerBody: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10
    },
    bottomContainerBodyText: {
      flex: 1,
      marginLeft: 10,
      fontFamily: vars.fonts.numeric,
      fontSize: vars.fontSize.xxlarge
    },
    xeContainer: {
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: DeviceInfo.getModel() === 'iPhone X' ? 25 : 10
    },
    xeContainerBody: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    xeContainerBodyImage: {
      width: 42,
      height: 34
    },
    xeContainerBodyText: {
      color: vars.colors.black,
      fontSize: vars.fontSize.regular,
      fontFamily: vars.fonts.base
    },
    shakeFeatureInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: Dimensions.get('window').width,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: vars.colors.black,
      paddingTop: 5,
      paddingBottom: DeviceInfo.getModel() === 'iPhone X' ? 15 : 5,
      paddingHorizontal: 5
    },
    shakeFeatureInfoText: {
      fontSize: vars.fontSize.regular,
      fontFamily: vars.fonts.numeric,
      color: vars.colors.white,
      marginLeft: 15
    }
  });
}
