import { StyleSheet } from 'react-native';
import { Color, Font, shadows } from '../../constants/GlobalStyle';

export const productDetailsStyle = StyleSheet.create({
  imageAndNavContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.10)',
    backgroundColor: 'rgba(200, 59, 98, 0.06)',
    paddingTop: 50,
  },
  navigationAndFavCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  favAndCartCon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'space-between',
  },
  navAndFav: {
    height: 34,
    width: 34,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.C_border,
    borderWidth: 1,
  },
  description: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: Color.C_border,
    borderBottomWidth: 1,
    marginBottom: 20,
    backgroundColor: Color.C_white,
  },
  title: {
    fontSize: Font.Font_L,
    marginBottom: 10,
    lineHeight: 25,
  },
  productIdandDisc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  brandLogoContainer: {
    width: 24,
    height: 24,
    backgroundColor: Color.C_white,
    borderRadius: 4,
    shadowColor: shadows.shadow_color,
    elevation: shadows.elevation_1,
    shadowOffset: {
      width: shadows.offsetWidth_1,
      height: shadows.offsetHeight_1,
    },
    shadowRadius: shadows.radius_1,
    shadowOpacity: shadows.opacity_1,
    padding: 4,
    marginRight: 5,
  },
  brandLogo: {
    width: '100%',
    height: '100%',
  },
  verticalDivider: {
    fontSize: Font.Font_M,
    fontWeight: '700',
    color: Color.C_border,
    marginHorizontal: 10,
  },
  brandName: {
    fontSize: Font.Font_M,
    color: 'rgba(0,0,0,0.6)',
  },
  colorIndicatorCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingText: {
    marginRight: 5,
  },
  ratingNumber: {
    color: Color.C_H_black,
  },
  inStockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inStockText: {
    fontSize: Font.Font_M,
    color: '#009420',
    marginRight: 10,
    marginLeft: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currentPrice: {
    fontSize: Font.Font_XL,
    marginRight: 10,
  },
  productPrice: {
    fontSize: Font.Font_XXXL,
    fontWeight: '700',
    color: Color.C_main,
  },
  currency: {
    fontSize: Font.Font_X,
    fontWeight: '500',
  },
  discountedPrice: {
    fontSize: Font.Font_L,
    color: Color.C_H_black,
    textDecorationLine: 'line-through',
  },
  discountedCurrency: {
    fontSize: Font.Font_M,
  },
  discountTextCon: {
    height: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  discountPercent: {
    color: Color.C_main,
    fontSize: Font.Font_S,
  },
  quantityCon: {
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    height: 40,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  increaseDecreaseButton: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inDecActionLayer: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minusPlusText: {
    fontSize: Font.Font_XXL,
  },
  quantityBox: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highLightedInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 40,
  },
  highLightedInfoItem: {
    width: '47.5%',
    height: 70,
    flexDirection: 'row',
    borderColor: Color.C_border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
    paddingLeft: 15,
  },
  highLightedInfoItemLogoCon: {
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    padding: 5,
    marginRight: 10,
  },
  highLightedInfoItemLogo: { width: '100%', height: '100%' },
  highLightedInfoItemName: {
    color: Color.C_H_black,
    fontSize: Font.Font_M,
    marginBottom: 5,
  },
  highLightedInfoItemSpec: { color: Color.C_black, fontSize: Font.Font_M },
  navigationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: Color.C_border,
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  activeNavigation: {
    borderBottomColor: Color.C_main,
    borderBottomWidth: 1,
    paddingBottom: 11,
    flex: 1,
    alignItems: 'center',
  },
  defaultNavigation: {
    flex: 1,
    alignItems: 'center',
  },
  ViewMoreInfo: {
    backgroundColor: 'rgba(35, 63, 163, 0.05)',
    paddingHorizontal: 10,
    height: 40,
    width: 200,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  BuyNowButtonAndPriceContainer: {
    height: 90,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: shadows.shadow_color,
    elevation: shadows.elevation_1,
    shadowOffset: {
      width: shadows.offsetWidth_1,
      height: shadows.offsetHeight_1,
    },
    shadowRadius: shadows.radius_1,
    shadowOpacity: shadows.opacity_1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  totalPriceConInfixedButtonBox: {},
  totalPrice: {
    fontSize: Font.Font_M,
    color: 'rgba(0,0,0,0.8)',
    marginBottom: 5,
  },
  buyButtonAndCartCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linearButton: {
    height: 50,
    borderRadius: 30,
  },
  buyButton: {
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: Color.C_white,
    fontSize: Font.Font_L,
  },
  cartButton: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: 'rgba(35, 63, 163, 0.10)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});
