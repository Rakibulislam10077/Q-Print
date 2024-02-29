import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Color, Font } from '../../constants/GlobalStyle';
import { editProfileStyle } from '../../pages/editProfile/EditProfileStyle';
import { useGetUserQuery } from '../../redux/api/apiSlice';

const EditUserInfo = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  console.log(JSON.stringify(data?.data, null, 2));
  const info = data?.data?.defaultAddress?.addressId;
  return (
    <View style={styles.bodyContainer}>
      <ScrollView>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={Color.C_black_eight}
          placeholder={`${info?.firstName}`}
        />

        <Divider style={styles.dividerStyle} />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={Color.C_black_eight}
          placeholder={`${info?.lastName}`}
        />

        <Divider style={styles.dividerStyle} />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={Color.C_black_eight}
          placeholder="hello@expersquad.net"
        />

        <Divider style={styles.dividerStyle} />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={Color.C_black_eight}
          placeholder={`${info?.phoneNumber}`}
        />

        <Divider style={styles.dividerStyle} />
        {/* Update button */}
      </ScrollView>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#C83B62', '#7F35CD']}
        style={styles.updateButton}
      >
        <TouchableOpacity activeOpacity={0.5} style={styles.updateButtonTouchAction}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default EditUserInfo;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: Color.C_white,
    paddingTop: 10,
  },
  label: {
    fontSize: Font.Font_L,
    color: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
  },
  input: {
    fontSize: Font.Font_X,
  },
  dividerStyle: {
    marginTop: 10,
  },
  updateButton: {
    width: '85%',
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    // marginTop: 'auto',
    marginTop: 'auto',
    marginBottom: 20,
  },
  updateButtonTouchAction: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    fontSize: Font.Font_X,
    color: Color.C_white,
  },
});
