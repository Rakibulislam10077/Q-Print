import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { EmptyDataLogo } from '../../../assets/allSvg/AllSvg';

const EmptyData = () => {
  return (
    <View style={styles.container}>
      <EmptyDataLogo />
    </View>
  );
};

export default EmptyData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
