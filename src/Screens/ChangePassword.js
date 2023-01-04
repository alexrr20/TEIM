import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import TextInput1 from '../Components/TextInput1';
import {useForm} from 'react-hook-form';
import BackBtn from '../Components/BackBtn';

function ChangePassword({navigation}) {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#141414',
      height: '100%',
    },
    backText: {
      color: '#faf2ec',
    },
    backPressable: {
      display: 'flex',
      flexDirection: 'row',
    },
    header: {
      fontSize: 32.44,
      fontFamily: 'PPNeueMontreal-Bold',
      color: '#faf2ec',
      textAlign: 'center',
    },
    subHeader: {
      fontSize: 14.24,
      fontFamily: 'PPNeueMontreal-Medium',
      color: '#faf2ec',
      textAlign: 'center',
      lineHeight: 23,
    },
    darkModeBtn: {
      backgroundColor: '#222148',
      borderColor: '#847EFF',
      borderWidth: 0.5,
      height: '80%',
      width: '80%',
      borderRadius: 16,
    },
    darkModeText: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 16,
    },
    darkModeContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 320,
    },
    bulletPoint: {
      color: '#faf2ec',
      fontSize: 14,
      fontFamily: 'PPNeueMontreal-Medium',
    },
    loginBtn: {
      backgroundColor: '#faf2ec',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 49,
      borderRadius: 4,
    },
    loginBtnText: {
      color: '#141414',
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 17,
    },
  });

  const {control, handleSubmit} = useForm();

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('ChooseTheme');
  };

  return (
    <View style={styles.mainContainer}>
      <BackBtn navigation={navigation} />
      <View>
        <Text style={styles.header}>Defina uma nova palavra-passe</Text>
        <Text style={styles.subHeader}>
          Por motivos de segurança, pedimos-lhe que escolha uma nova
          palavra-passe, diferente da que utiliza no seu email.
        </Text>
      </View>
      <View style={styles.darkModeContainer}>
        <View style={styles.darkModeBtn}>
          <Text style={styles.darkModeText}>
            Dicas para uma palavra-passe segura
          </Text>
          <Text style={styles.bulletPoint}>
            {'\u25CF Conter pelo menos 10 caracteres'}
          </Text>
          <Text style={styles.bulletPoint}>
            {'\u25CF Incluir símbolos especiais, números e letras maiúsculas'}
          </Text>
          <Text style={styles.bulletPoint}>
            {
              '\u25CF Significativamente diferente da palavra-passe usada para aceder ao email'
            }
          </Text>
        </View>
      </View>
      <TextInput1
        control={control}
        name={['Palavra-Passe', 'Confirmar Palavra-Passe']}
      />
      <View style={styles.loginBtnContainer}>
        <Pressable
          style={styles.loginBtn}
          onPress={() => navigation.navigate('OnboardingQuestion')}>
          <Text style={styles.loginBtnText}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ChangePassword;
