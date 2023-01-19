import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userToken, setuserToken] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const login = async ({email, password}) => {
    await axios
      .post('https://teim.onrender.com/api-docs/#/workers/post_workers_login', {
        email: '1',
        password: '1',
      })
      .then(function (response) {
        try {
          console.log(response.data);
          setuserToken(response.data);
          AsyncStorage.setItem('userToken', response.data);
        } catch (e) {
          console.log(e);
        } // your catch block
      })
      .catch(function (error) {
        console.log(error);
      });
    setisLoading(true);
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
