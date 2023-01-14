import React, {useState} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, useColorScheme} from 'react-native';
import Login from './Screens/Login';
import ChooseTheme from './Screens/ChooseTheme';
import ChangePassword from './Screens/ChangePassword';
import OnboardingQuestion from './Screens/OnboardingQuestion';
import Home from './Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [SetupDone, setSetupDone] = useState(false);

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

  if (!SetupDone) {
    return (
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : lightTheme}>
        <StatusBar
          backgroundColor={colors.background}
          barStyle={
            colors.background === '#141414' ? 'light-content' : 'dark-content'
          }
        />
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
            setupdone={SetupDone}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else if (SetupDone) {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
