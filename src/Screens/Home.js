import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DateTime} from 'luxon';
import {useTheme} from '@react-navigation/native';
import NavBar from '../Components/NavBar';
import Tasks from '../Components/Tasks';

export default function Home() {
  const now = DateTime.now().setLocale('pt').toLocaleString(DateTime.DATE_HUGE);

  const {colors} = useTheme();

  return (
    <View>
      <NavBar />
      <Tasks />
    </View>
  );
}
