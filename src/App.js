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
import {GestureHandlerRootView} from 'react-native-gesture-handler';

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

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthProvider>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : lightTheme}>
          <StatusBar
            backgroundColor={colors.background}
            barStyle={
              colors.background === '#141414' ? 'dark-content' : 'light-content'
            }
          />
          <Navigation />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
