import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import HomeScreen from '../HomeScreen';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import PriceList from '../PriceList';
import Wallet from '../Wallet';
import Help from '../Help';
import Color from '../Styles/Color';
import Edit from '../../assets/images/editIcon.svg';
import Location from '../../assets/images/location.svg';
import WalletIcon from '../../assets/images/wallet.svg';
import HelpIcon from '../../assets/images/helpIcon.svg';
import LogoutIcon from '../../assets/images/logoutIcon.svg';
import {
  fontPixel,
  horizontalScale,
  pixelSizeHorizontal,
  pixelSizeVertical,
  responsiveBorderRadius,
  verticalScale,
} from '../Styles/Dimesions';
import FontFamily from '../Styles/FontFamily';
import Home from '../../assets/images/home.svg';
import { AppContext } from '../Context/AppContext';

const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get('window');

const MainStack = (Stack) => {
  return <Stack.Screen name="Home" component={DrawerNavigation} />;
};

const DrawerItems = (props) => {
  const { navigation } = props;
  const { handleLogout } = useContext(AppContext);
  const getLabelStyle = {
    color: Color.defaultBlack,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(20),
  };
  const handleLogoutPress = () => {
    Alert.alert('Are You Sure You Want To Logout', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          handleLogout();
          const ck = setTimeout(() => {
            navigation.navigate('Login');
            clearTimeout(ck);
          }, 1000);
        },
      },
    ]);
  };
  return (
    <View style={styles.listContainer}>
      <DrawerItem
        label="Home"
        icon={() => <Home width={horizontalScale(30)} height={verticalScale(30)} />}
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={getLabelStyle}
        style={{ marginVertical: pixelSizeVertical(14) }}
      />
      <DrawerItem
        label="Wallet"
        icon={() => <WalletIcon width={horizontalScale(30)} height={verticalScale(30)} />}
        onPress={() => props.navigation.navigate('Wallet')}
        labelStyle={getLabelStyle}
        style={{ marginVertical: pixelSizeVertical(14) }}
      />
      <DrawerItem
        label="Help"
        icon={() => <HelpIcon width={horizontalScale(30)} height={verticalScale(30)} />}
        onPress={() => props.navigation.navigate('Help')}
        labelStyle={getLabelStyle}
        style={{ marginVertical: pixelSizeVertical(14) }}
      />
      <DrawerItem
        label="Logout"
        icon={() => <LogoutIcon width={horizontalScale(30)} height={verticalScale(30)} />}
        onPress={handleLogoutPress}
        labelStyle={getLabelStyle}
        style={{ marginVertical: pixelSizeVertical(14) }}
      />
    </View>
  );
};

function CustomDrawerNavigation(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.profileImg}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Edit width={horizontalScale(20)} height={verticalScale(20)} />
          </TouchableOpacity>
        </View>
        <Text style={styles.nameText}>Siddappa Tambakad</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Location</Text>
          <Location width={horizontalScale(20)} height={verticalScale(20)} />
        </View>
        <Text style={styles.rating}>Rated 4.9 ⭐</Text>
        <Text style={styles.phoneNumber}>+91 7406913053</Text>
      </View>
      <View style={styles.listContainer}>
        <DrawerItems {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: Color.loginLinear2,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingTop: pixelSizeVertical(20),
  },
  profileImg: {
    width: width * 0.17,
    height: height * 0.1,
    resizeMode: 'contain',
  },
  editIcon: {
    width: width * 0.09,
    height: height * 0.05,
    backgroundColor: Color.defaultBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveBorderRadius(30),
  },
  nameText: {
    color: Color.defaultBackground,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(18),
    paddingLeft: pixelSizeHorizontal(20),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(20),
  },
  locationText: {
    paddingRight: pixelSizeHorizontal(8),
    color: Color.defaultBackground,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(18),
  },
  rating: {
    color: Color.defaultBackground,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(18),
    paddingLeft: pixelSizeHorizontal(20),
  },
  phoneNumber: {
    color: Color.defaultBackground,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(18),
    paddingLeft: pixelSizeHorizontal(20),
  },
  listContainer: {
    backgroundColor: Color.defaultBackground,
    height: height * 0.69 ,
    marginTop: pixelSizeVertical(30),
    borderTopLeftRadius: responsiveBorderRadius(30),
    marginLeft: pixelSizeHorizontal(20),
  },
});

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: Color.loginLinear2,
        },
      }}
      drawerContent={(props) => <CustomDrawerNavigation {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="PriceList" component={PriceList} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};

export default MainStack;
