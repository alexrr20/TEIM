import SetupNavigator from './SetupNavigator';
import MainNavigator from './MainNavigator';
import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';
import {ActivityIndicator, View} from 'react-native';

export default function Navigation() {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    <View>
      <ActivityIndicator size={'large'} />
    </View>;
  }

  console.log(userToken);

  if (userToken !== null) {
    return <MainNavigator />;
  } else {
    return <SetupNavigator />;
  }
}
