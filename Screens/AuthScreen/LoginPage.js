import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Color from '../Styles/Color'
import Google from '../../assets/images/google.svg'
import FaceBook from '../../assets/images/facebook.svg'
import Apple from '../../assets/images/apple.svg'
import ArrowRight from '../../assets/images/ArrowRight.svg'
import ErrorIcon from '../../assets/images/errorIcon.svg'
import { fontPixel, horizontalScale, pixelSizeHorizontal, pixelSizeVertical, responsiveBorderRadius, verticalScale } from '../Styles/Dimesions'
import FontFamily from '../Styles/FontFamily'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppContext } from '../Context/AppContext'

const { width, height } = Dimensions.get('window')
const LoginPage = ({ navigation }) => {
  const { handleLogin } = useContext(AppContext)
  const [userDetails, setUserDetails] = useState({
    password: '',
    email: '',
  });

  const [errorMsg, setErrorMsg] = useState({
    password: '',
    email: '',
  });

  const [showError, setShowError] = useState({
    password: null,
    email: null,
  });

  const emailRegex = /^\S+@\S+\.\S{2,3}$/;
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

  const handleButtonClick = async () => {
    if (userDetails.email === '' || !emailRegex.test(userDetails.email)) {
      setErrorMsg({
        ...errorMsg,
        email: 'Enter Valid Email',
      });
      setShowError({ ...showError, email: true });
    } else if (userDetails.password === '' || !passwordPattern.test(userDetails.password)) {
      setErrorMsg({ ...errorMsg, password: 'Password must contain, 8,A,a,@,1' });
      setShowError({ ...showError, password: true });
    } else {
      setShowError({
        ...showError,
        password: false,
        email: false,
      });
      try {
        await AsyncStorage.setItem('Email', userDetails.email.toString());
        console.log('email', userDetails.email);
        handleLogin();
        navigation.navigate('Home');
      } catch (error) {
        console.error('Failed to save the email to storage', error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={styles.welcomeText}>Welcome to Bharat Laundry</Text>
        {/* google login */}
        <TouchableOpacity style={styles.googleContainer}>
          <Google width={horizontalScale(35)} height={verticalScale(35)} />
          <Text style={styles.googleText}>Login With Google</Text>
        </TouchableOpacity>
        {/* facebook login */}
        <TouchableOpacity style={styles.facebookContainer}>
          <FaceBook width={horizontalScale(35)} height={verticalScale(35)} />
          <Text style={styles.facebookText}>Login With FaceBook</Text>
        </TouchableOpacity>
        {/* apple login */}
        <TouchableOpacity style={styles.appleContainer}>
          <Apple width={horizontalScale(35)} height={verticalScale(35)} />
          <Text style={styles.appleText}>Login With Apple</Text>
        </TouchableOpacity>
        <Text style={styles.byEmailText}>or by email</Text>
        <TextInput style={styles.emailContainer} placeholder='Email Address' placeholderTextColor={Color.defaultBackground} value={userDetails.email} onChangeText={e => {
          setUserDetails({
            ...userDetails,
            email: e,
          });
          setShowError({
            ...showError,
            email: false,
          });
        }} />
        {showError.email && (
          <View style={styles.errorContainer}>
            <ErrorIcon
              width={horizontalScale(15)}
              height={verticalScale(15)}
            />
            <Text style={styles.errorText}>{errorMsg.email}</Text>
          </View>
        )}
        <TextInput style={styles.passwordCOntainer} placeholder='Password' placeholderTextColor={Color.defaultBackground} value={userDetails.password} onChangeText={e => {
          setUserDetails({
            ...userDetails,
            password: e,
          });
          setShowError({
            ...showError,
            password: false,
          });
        }} />
        {showError.password && (
          <View style={styles.errorContainer}>
            <ErrorIcon
              width={horizontalScale(15)}
              height={verticalScale(15)}
            />
            <Text style={styles.errorText}>{errorMsg.password}</Text>
          </View>
        )}
        <Text style={styles.forgotPassText}>Forgotpassword?</Text>
        <TouchableOpacity style={styles.signInButton} onPress={() => { handleButtonClick() }}>
          <Text style={styles.signinText}>Sign In</Text>
          <ArrowRight />
        </TouchableOpacity>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.createAccount}>Don't have an account? <Text style={styles.accountCreateLink}>Create an account</Text></Text>
      </View>
    </ScrollView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.defaultBlack,
    // flexGrow: 1,
    height: height
  },
  welcomeText: {
    color: Color.defaultBackground,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(30),
    textAlign: 'center',
    marginVertical: pixelSizeVertical(30)
  },
  googleContainer: {
    backgroundColor: Color.defaultBackground,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    height: height * 0.08,
    borderRadius: responsiveBorderRadius(8),
    marginVertical: pixelSizeVertical(8)
  },
  googleText: {
    paddingLeft: pixelSizeHorizontal(10),
    fontFamily: FontFamily.bold,
    color: Color.defaultBlack,
    fontSize: fontPixel(20)
  },
  facebookContainer: {
    backgroundColor: Color.defaultBackground,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    height: height * 0.08,
    borderRadius: responsiveBorderRadius(8),
    marginVertical: pixelSizeVertical(8)
  },
  facebookText: {
    paddingLeft: pixelSizeHorizontal(10),
    fontFamily: FontFamily.bold,
    color: Color.defaultBlack,
    fontSize: fontPixel(20)
  },
  appleContainer: {
    backgroundColor: Color.defaultBackground,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    height: height * 0.08,
    borderRadius: responsiveBorderRadius(8),
    marginVertical: pixelSizeVertical(8)
  },
  appleText: {
    paddingLeft: pixelSizeHorizontal(10),
    fontFamily: FontFamily.bold,
    color: Color.defaultBlack,
    fontSize: fontPixel(20)
  },
  byEmailText: {
    color: Color.defaultBackground,
    textAlign: 'center',
    marginVertical: pixelSizeVertical(16),
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(20)
  },
  emailContainer: {
    width: width * 0.9,
    height: height * 0.08,
    borderWidth: 1.5,
    borderColor: Color.defaultBackground,
    alignSelf: 'center',
    borderRadius: responsiveBorderRadius(8),
    paddingLeft: pixelSizeHorizontal(14),
    marginVertical: pixelSizeVertical(10),
    color: Color.defaultBackground,
  },
  passwordCOntainer: {
    width: width * 0.9,
    height: height * 0.08,
    borderWidth: 1.5,
    borderColor: Color.defaultBackground,
    alignSelf: 'center',
    borderRadius: responsiveBorderRadius(8),
    paddingLeft: pixelSizeHorizontal(14),
    marginVertical: pixelSizeVertical(10),
    color: Color.defaultBackground,

  },
  forgotPassText: {
    color: Color.defaultBackground,
    textAlign: 'right',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(8)
  },
  signInButton: {
    backgroundColor: Color.buttonColor,
    width: width * 0.9,
    height: height * 0.09,
    alignSelf: 'center',
    marginTop: pixelSizeVertical(28),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveBorderRadius(8),
    marginBottom: pixelSizeVertical(16)
  },
  signinText: {
    color: Color.defaultBackground,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(26),
    paddingHorizontal: pixelSizeHorizontal(8),
  },
  firstContainer: {
    height: height * 0.88,
  },
  secondContainer: {
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  createAccount: {
    color: Color.defaultBackground,
    fontSize: fontPixel(18),
    fontFamily: FontFamily.regular
  },
  accountCreateLink: {
    color: Color.buttonColor,
    fontSize: fontPixel(18),
    fontFamily: FontFamily.regular,
    textDecorationLine: 'underline'
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(20)
  },
  errorText: {
    fontFamily: FontFamily.regular,
    // color: Color.defaultBackground,
    color: 'red',
    fontSize: fontPixel(12),
    paddingLeft: pixelSizeHorizontal(4),
  },
})