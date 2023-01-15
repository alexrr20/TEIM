import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DateTime} from 'luxon';
import {useTheme} from '@react-navigation/native';

export default function Header({headerText}) {
  const now = DateTime.now().setLocale('pt').toLocaleString(DateTime.DATE_HUGE);

  const {colors} = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      borderTopColor: colors.border,
      borderTopWidth: 1,
    },
    pageDate: {
      color: colors.text,
      fontFamily: 'PPNeueMontreal-Medium',
      fontSize: 14.22,
    },
    pageHeader: {
      color: colors.text,
      fontFamily: 'PPNeueMontreal-Bold',
      fontSize: 32.44,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.pageDate}>{now}</Text>
      <Text style={styles.pageHeader}>{headerText}</Text>
    </View>
  );
}
