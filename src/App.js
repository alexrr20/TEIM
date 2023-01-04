import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import ChooseTheme from './Screens/ChooseTheme';
import ChangePassword from './Screens/ChangePassword';
import {StatusBar} from 'react-native';
import OnboardingQuestion from './Screens/OnboardingQuestion';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#141414" barStyle="light-content" />
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
