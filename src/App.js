import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, useColorScheme} from 'react-native';
import Login from './Screens/Login';
import ChooseTheme from './Screens/ChooseTheme';
import ChangePassword from './Screens/ChangePassword';
import OnboardingQuestion from './Screens/OnboardingQuestion';

const Stack = createNativeStackNavigator();

export default function App() {
  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#faf2ec',
      text: '#141414',
    },
  };
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : lightTheme}>
      <StatusBar backgroundColor="#141414" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChooseTheme" component={ChooseTheme} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen
          name="OnboardingQuestion"
          component={OnboardingQuestion}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
