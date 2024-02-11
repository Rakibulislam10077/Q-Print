import { StyleSheet } from 'react-native';
import { Color, Font } from '../../../constants/GlobalStyle';

export const placedOrderStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.C_border,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    height: 350,
    marginBottom: 20,
  },
  title: {
    fontSize: Font.Font_L,
    fontWeight: '500',
    marginLeft: 10,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 8,
    marginTop: 'auto',
  },
  actionLayer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: Font.Font_L,
    color: Color.C_white,
    fontWeight: '500',
  },
  divider: {
    marginTop: 10,
  },
});
