import {View, Text} from 'react-native';
import React from 'react';
import Header from '../Components/Header';

const Calendar = () => {
  return (
    <View style={{marginVertical: '17%'}}>
      <Header headerText={'Calendário'} />
      <Text>Calendar</Text>
    </View>
  );
};


export default Calendar;
