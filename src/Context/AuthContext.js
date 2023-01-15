import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userToken, setuserToken] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const login = () => {
    setisLoading(true);
    setuserToken('dadassa');
    AsyncStorage.setItem('userToken', 'dadassa');
    setisLoading(false);
  };

  const logout = () => {
    setisLoading(true);
    setuserToken(null);
    AsyncStorage.removeItem('userToken');
    setisLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setisLoading(true);
      let userTokenToSet = await AsyncStorage.getItem('userToken');
      setuserToken(userTokenToSet);
      setisLoading(false);
    } catch (e) {
      console.log('error getting logged in user: ' + e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
