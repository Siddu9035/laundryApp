import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        getStoredEmail()
        saveIsLoggedIn()
    }, [isLoggedIn])

    const getStoredEmail = async () => {
        try {
            const getEmail = await AsyncStorage.getItem('Email');
            if (getEmail) {
                const email = getEmail;
                console.log('email:', email);
            } else {
                console.log('No email found in storage.');
            }
        } catch (error) {
            console.error('Failed to get email from AsyncStorage:', error);
        }

    }

    const handleLogin = async () => {
        setIsLoggedIn(true)
        try {
            await AsyncStorage.setItem('isLoggedIn', 'true')
            console.log('logged in successfully');
        } catch (error) {
            console.log('error', error);
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        AsyncStorage.setItem('isLoggedIn', 'false')
    }
    const saveIsLoggedIn = async () => {
        try {
            const loggedIn = await AsyncStorage.getItem('isLoggedIn');
            if (loggedIn !== null && loggedIn === 'true') {
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error('Error saving isLoggedIn to AsyncStorage:', error);
        }
    };

    return (
        <AppContext.Provider value={{
            setIsLoggedIn,
            isLoggedIn,
            handleLogin,
            handleLogout
        }}>{children}</AppContext.Provider>
    )
}

