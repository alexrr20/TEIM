import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import BackBtn from '../Components/BackBtn';
import {useTheme} from '@react-navigation/native';

export default function OnboardingQuestion({navigation, setupdone}) {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.background,
      height: '100%',
    },
    contentContainer: {
      marginTop: 240,
    },
    header: {
      fontSize: 32.44,
      fontFamily: 'PPNeueMontreal-Bold',
      color: colors.text,
      textAlign: 'left',
    },
    subHeader: {
      fontSize: 14.24,
      fontFamily: 'PPNeueMontreal-Medium',
      color: colors.text,
      textAlign: 'left',
      lineHeight: 23,
    },
    noBtn: {
      backgroundColor: '#222148',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 49,
      borderRadius: 4,
      borderColor: '#847EFF',
      borderWidth: 1,
    },
    noBtnText: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-SemiBold',
    },
    yesBtn: {
      backgroundColor: '#6B64FF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 49,
      borderRadius: 4,
    },
    yesBtnText: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-SemiBold',
    },
    oval: {
      width: 140,
      height: 140,
      marginTop: 100,
      marginLeft: 80,
      backgroundColor: '#6B64FF',
      transform: [{scaleX: 13}, {rotate: '105deg'}],
      borderTopLeftRadius: 208,
      borderTopRightRadius: 208,
      borderBottomLeftRadius: 205,
      borderBottomRightRadius: 205,
    },
  });

  const handleSubmit = () => {
    setupdone = true;
    navigation.navigate('Home');
    console.log(setupdone);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.oval} />
      <BackBtn navigation={navigation} />
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Precisa de ajuda?</Text>
        <Text style={styles.subHeader}>
          Se não está familiarizado com a TEIM ou outras aplicações de gestão de
          tempo, recomendamos que realize o tutorial.
        </Text>
        <View style={styles.loginBtnContainer}>
          <Pressable style={styles.noBtn} onPress={handleSubmit}>
            <Text style={styles.noBtnText}>
              Não - quero utilizar a aplicação
            </Text>
          </Pressable>
          <Pressable style={styles.yesBtn} onPress={handleSubmit}>
            <Text style={styles.noBtnText}>Sim - preciso de ajuda</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
