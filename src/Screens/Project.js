import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import BackBtn from '../Components/BackBtn';
import {useTheme} from '@react-navigation/native';

const Project = ({navigation}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    clientContainer: {
      flexDirection: 'row',
    },
    headerContainer: {
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
    },
    projectName: {
      color: colors.text,
      fontSize: 36,
      fontFamily: 'PPNeueMontreal-Bold',
    },
    clientText1: {
      color: colors.text,
      fontSize: 16,
      fontFamily: 'PPNeueMontreal-SemiBold',
    },
    clientText2: {
      color: colors.text,
      fontSize: 14,
      fontFamily: 'PPNeueMontreal-Medium',
    },
  });

  return (
    <View>
      <BackBtn navigation={navigation} />
      <View style={styles.headerContainer}>
        <Text style={styles.projectName}>Projeto 1</Text>
        <View style={styles.clientContainer}>
          <Text style={styles.clientText1}>Cliente</Text>
          <Text style={styles.clientText2}>Alexandre Bessa</Text>
        </View>
      </View>
    </View>
  );
};

export default Project;
