import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import avatar from '../../assets/images/avatar.jpg';
import {useTheme} from '@react-navigation/native';

const SelectedUser = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#1A1920',
      borderColor: '#242424',
      borderWidth: 1,
      borderRadius: 10,
      width: '90%',
      paddingVertical: 7,
      paddingHorizontal: 15,
      marginTop: 20,
    },
    title: {
      color: colors.notification,
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 16,
      marginBottom: 4,
    },
    name: {
      color: colors.text,
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 16,
    },
    subText: {
      color: '#727272',
      fontFamily: 'PPNeueMontreal-Medium',
    },
    avatar: {
      width: 45,
      height: 45,
      borderRadius: 12,
      marginRight: 10,
    },
    contentAvatarContainer: {
      flexDirection: 'row',
    },
    contentContainer: {},
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Líder do Projeto</Text>
      <View style={styles.contentAvatarContainer}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.contentContainer}>
          <Text style={styles.name}>Pedro Baldaia</Text>
          <Text style={styles.subText}>2 equipas</Text>
        </View>
      </View>
    </View>
  );
};

export default SelectedUser;
