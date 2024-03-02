import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Color, Font } from '../../constants/GlobalStyle';
import React from 'react';
import { useGetUserQuery } from '../../redux/api/apiSlice';
const ShippingInfo = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  console.log(JSON.stringify(data?.data, null, 2));
  const info = data?.data?.billingAddress?.addressId;
  return (
    <View style={styles.bodyContainer}>
      <ScrollView>
        <View>
          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={Color.C_black_eight}
            placeholder={`${info?.country}`}
          />
        </View>
        <Divider style={styles.dividerStyle} />
        <View>
          <Text style={styles.label}>State</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={Color.C_black_eight}
            placeholder={`${info?.state}`}
          />
        </View>
        <Divider style={styles.dividerStyle} />
        <View>
          <Text style={styles.label}>Zip Code</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={Color.C_black_eight}
            placeholder={`${info?.zipCode}`}
          />
        </View>
        <Divider style={styles.dividerStyle} />
        <View>
          <Text style={styles.label}>Company Name (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={Color.C_black_eight}
            placeholder="Rakibulislam118"
          />
        </View>
        <Divider style={styles.dividerStyle} />

        <View>
          <Text style={styles.label}>Street Address</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={Color.C_black_eight}
            placeholder={`${info?.streetAddress}`}
            numberOfLines={2}
          />
        </View>
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

export default ShippingInfo;

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
