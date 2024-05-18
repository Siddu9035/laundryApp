import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStack from './Screens/Navigators/AuthStack';
import SplashScreen from './Screens/SplashScreen';
import MainStack from './Screens/Navigators/MainStack';
import { AppContext } from './Screens/Context/AppContext';

const Stack = createStackNavigator()
const App = () => {
  const { isLoggedIn } = useContext(AppContext)
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false)
    }, 2500);
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {showSplash && (
            <Stack.Screen name='Splash' component={SplashScreen} />
          )}
          {isLoggedIn ? (
            <>
              {MainStack(Stack)}
            </>
          ) : (
            <>
              {AuthStack(Stack)}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})