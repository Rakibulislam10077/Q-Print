import { Platform, StyleSheet } from 'react-native';
import { Color, Font } from '../../constants/GlobalStyle';

export const profileStyle = StyleSheet.create({
  headerContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: Font.Font_X,
    marginLeft: 20,
    color: Color.C_white,
  },
  profileCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImg: {
    width: 90,
    height: 90,
    borderWidth: 2,
    borderColor: Color.C_white,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  img: {
    height: 85,
    width: 85,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  userName: {
    fontSize: Font.Font_X,
    fontWeight: '600',
    color: Color.C_white,
    alignSelf: 'center',
    marginTop: 10,
  },
  bodyCon: {
    backgroundColor: Color.C_white,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 25,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  routeItemCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginBottom: 5,
  },
  iconAndTitleCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: Font.Font_L,
    marginLeft: 10,
  },
  reviewBaseStyle: {
    marginLeft: 10,
  },
  modal: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#fff',
    // height: Platform.OS === 'ios' ? 400 : 380,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  cameraModal: {
    height: 140,
    width: '75%',
    backgroundColor: Color.C_white,
    borderRadius: 10,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
  cameraModalContentCon: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  iconCon: {
    width: 70,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  ProfileModalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    alignSelf: 'center',
  },
  profileModalLabel: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.8)',
    alignSelf: 'center',
    marginTop: 5,
  },
});
