import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { allBrandStyle } from './AllBrandStyle'
import { Divider } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const AllBrand = (item:any) => {
const navigation:any = useNavigation();
  return (
    <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('BrandDetails', {...item})} style={allBrandStyle.CartContainer}>
      <Image style={allBrandStyle.logo} source={item?.item?.img}/>
      <Text style={allBrandStyle.brandName}>Canon</Text>
      <Divider/>
      <Text style={allBrandStyle.avilableProductText}>25 Product Available</Text>
    </TouchableOpacity>
  )
}

export default AllBrand