import React, {useEffect} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
import Navigation from './Navigation/Navigation';
import {AuthProvider} from './Context/AuthContext';

export default function App() {
  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#faf2ec',
      text: '#141414',
    },
  };

  const scheme = useColorScheme();
  const {colors} = useTheme();

  console.log(scheme);

  return (
    <AuthProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : lightTheme}>
        <StatusBar
          backgroundColor={colors.background}
          barStyle={
            colors.background === '#141414' ? 'light-content' : 'dark-content'
          }
        />
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
