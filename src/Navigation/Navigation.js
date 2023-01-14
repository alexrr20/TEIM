import React from 'react';
import SetupNavigator from './SetupNavigator';
import MainNavigator from './MainNavigator';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Navigation() {
  const [isLogged, setisLogged] = useState();

  useEffect(() => {
    const getLoggedIn = async () => {
      const loggedIn = await AsyncStorage.setItem(
        'loggedIn',
        JSON.stringify(false),
      );
      setisLogged(loggedIn);
    };

    getLoggedIn().catch(console.error);
  }, []);

  if (!isLogged) {
    return <SetupNavigator />;
  } else if (isLogged) {
    return <MainNavigator />;
  }
}
