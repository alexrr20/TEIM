import {View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Tasks from '../Components/Tasks';

export default function Home() {
  return (
    <View>
      <Header headerText={'Página Inicial'} />
      <Tasks />
    </View>
  );
}
