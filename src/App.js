import React, {useEffect} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
import Navigation from './Navigation/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#faf2ec',
      text: '#141414',
    },
  };

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      await AsyncStorage.setItem('loggedIn', JSON.stringify(false));
    };

    fetchData().catch(console.error);
  }, []);

  const scheme = useColorScheme();
  const {colors} = useTheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : lightTheme}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={
          colors.background === '#141414' ? 'light-content' : 'dark-content'
        }
      />
      <Navigation />
    </NavigationContainer>
  );
}
