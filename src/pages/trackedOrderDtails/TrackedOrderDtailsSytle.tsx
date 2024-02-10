import { StyleSheet } from 'react-native';
import { Color, Font } from '../../constants/GlobalStyle';

export const trackedOrderDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.C_white,
  },
  button: {
    width: '90%',
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  buttonActionLayer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: Font.Font_L,
    color: Color.C_white,
    fontWeight: '600',
  },
});
