import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Color from './Styles/Color'
import Location from '../assets/images/location.svg'
import { fontPixel, horizontalScale, pixelSizeHorizontal, pixelSizeVertical, responsiveBorderRadius, verticalScale } from './Styles/Dimesions'
import FontFamily from './Styles/FontFamily'
import Bell from '../assets/images/bell.svg'
import Basket from '../assets/images/basket.svg'
import Clothes from '../assets/images/clothes.svg'
import HouseHolds from '../assets/images/houseHolds.svg'
import Curtains from '../assets/images/curtains.svg'
import Plus from '../assets/images/plus.svg'

const { width, height } = Dimensions.get('window')
const HomeScreen = ({ navigation }) => {
  const data = [
    {
      image: require('../assets/images/clothe1.png'),
      type: 'shirt',
      price: 10.00
    },
    {
      image: require('../assets/images/cloth2.png'),
      type: 'Jacket',
      price: 20.00
    },
    {
      image: require('../assets/images/cloth3.png'),
      type: 'T-shirt',
      price: 10.00
    },
  ]

  const renderItems = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.subTextContainer}>
            <View style={styles.headerText}>
              <Text style={styles.typeText}>{item.type}</Text>
              <Text style={styles.priceText}>{`₹ ${item.price}`}</Text>
            </View>
            <TouchableOpacity style={styles.plusContainer}>
              <Plus width={horizontalScale(25)} height={verticalScale(25)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  return (
    <LinearGradient style={styles.container} colors={[Color.loginLinear1, Color.loginLinear2, Color.loginLinear3]}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => {
            navigation.openDrawer()
          }}>
            <Image source={require('../assets/images/profile.png')} style={styles.profileImg} />
          </TouchableOpacity>
          <View style={styles.profileData}>
            <Text style={styles.profileText}>Hi Siddappa</Text>
            <View style={styles.profileLocation}>
              <Location width={horizontalScale(20)} height={verticalScale(20)} />
              <Text style={styles.locationText}>asdasd</Text>
            </View>
          </View>
        </View>
        <Bell width={horizontalScale(30)} height={verticalScale(30)} />
      </View>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.subHeaderContainer}>
          <View style={styles.basket}>
            <TouchableOpacity style={styles.basketContainer}>
              <Basket width={horizontalScale(45)} height={verticalScale(45)} />
            </TouchableOpacity>
            <Text style={styles.containerText}>Orders</Text>
          </View>
          <View style={styles.basket}>
            <TouchableOpacity style={styles.clothesContainer}>
              <Clothes width={horizontalScale(45)} height={verticalScale(45)} />
            </TouchableOpacity>
            <Text style={styles.containerText}>Clothes</Text>
          </View>
          <View style={styles.basket}>
            <TouchableOpacity style={styles.houseHoldsContainer}>
              <HouseHolds width={horizontalScale(45)} height={verticalScale(45)} />
            </TouchableOpacity>
            <Text style={styles.containerText}>HouseHolds</Text>
          </View>
          <View style={styles.basket}>
            <TouchableOpacity style={styles.curtainsContainer}>
              <Curtains width={horizontalScale(45)} height={verticalScale(45)} />
            </TouchableOpacity>
            <Text style={styles.containerText}>Curtains</Text>
          </View>
        </View>
        <View style={styles.banner}>
          <Image style={styles.bannerImge} source={require('../assets/images/banner.png')} />
        </View>
        <View style={styles.categorySec}>
          <FlatList scrollEnabled={false} data={data} renderItem={renderItems} />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImg: {
    width: width * 0.14,
    height: height * 0.1,
    resizeMode: 'contain'
  },
  profileData: {
    paddingLeft: pixelSizeHorizontal(8)
  },
  profileText: {
    color: Color.defaultBackground,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(20)
  },
  profileLocation: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationText: {
    color: Color.defaultBackground,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(20)
  },
  subHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(20)
  },
  basketContainer: {
    width: width * 0.18,
    backgroundColor: Color.iconBackColor,
    height: height * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderRadius: responsiveBorderRadius(8)
  },
  clothesContainer: {
    width: width * 0.18,
    backgroundColor: Color.defaultBackground,
    height: height * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderRadius: responsiveBorderRadius(8)
  },
  houseHoldsContainer: {
    width: width * 0.18,
    backgroundColor: Color.iconBackColor,
    height: height * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderRadius: responsiveBorderRadius(8)
  },
  curtainsContainer: {
    width: width * 0.18,
    backgroundColor: Color.iconBackColor,
    height: height * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderRadius: responsiveBorderRadius(8)
  },
  basket: {
    alignItems: 'center'
  },
  containerText: {
    color: Color.defaultBackground,
    fontSize: fontPixel(18),
    fontFamily: FontFamily.regular,
    paddingVertical: pixelSizeVertical(8)
  },
  banner: {
    alignSelf: 'center',
    // borderWidth: 1,
    width: width * 0.9
  },
  bannerImge: {
    width: width * 0.9,
    height: height * 0.24,
    // resizeMode: 'contain'
  },
  categorySec: {
    backgroundColor: Color.iconTextColor,
    flex: 1,
    borderTopLeftRadius: responsiveBorderRadius(40),
    borderTopRightRadius: responsiveBorderRadius(40),
    marginTop: pixelSizeVertical(10),
    paddingTop: pixelSizeVertical(10)
  },
  cardContainer: {
    backgroundColor: Color.defaultBackground,
    width: width * 0.9,
    alignSelf: 'center',
    height: height * 0.14,
    marginVertical: pixelSizeVertical(8),
    elevation: 8,
    borderRadius: responsiveBorderRadius(8),
    paddingVertical: pixelSizeVertical(5),
    paddingHorizontal: pixelSizeHorizontal(5)
  },
  image: {
    width: width * 0.18,
    height: height * 0.09,
    resizeMode: 'contain'
  },
  cardContent: {
    flexDirection: 'row',
  },
  subTextContainer: {
    flexDirection: 'column',
    paddingVertical: pixelSizeVertical(10)
  },
  typeText: {
    color: Color.defaultBlack,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(20)
  },
  priceText: {
    color: Color.defaultBlack,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(20)
  },
  plusContainer: {
    backgroundColor: Color.plusIconColor,
    alignSelf: 'flex-end',
    marginVertical: pixelSizeVertical(8),
    width: horizontalScale(30),
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveBorderRadius(8)
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.65,
  }
})