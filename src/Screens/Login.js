import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

function Login({navigation}) {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    container1: {
      flex: 1.6,
    },
    container2: {
      flex: 1,
      backgroundColor: '#141414',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container3: {
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
    },
    forgotPassword: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-Medium',
    },
    stayLoggedText: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-Medium',
    },
    inputContainer: {
      height: 122,
      marginBottom: 8,
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
    input: {
      backgroundColor: '#faf2ec',
    },
    input1: {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      height: '50%',
    },
    input2: {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      height: '50%',
    },
  });

  const {control, handleSubmit} = useForm();

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('ChooseTheme');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <Text>Login Header</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              name="email"
              render={({field: {value, onChange}}) => (
                <TextInput
                  placeholder="email"
                  value={value}
                  onTextChange={onChange}
                  style={[styles.input, styles.input1]}
                  autoCapitalize="none"
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({field: {value, onChange}}) => (
                <TextInput
                  placeholder="password"
                  value={value}
                  onTextChange={onChange}
                  style={[styles.input, styles.input2]}
                  secureTextEntry
                />
              )}
            />
          </View>
          <View>
            <Pressable>
              <Text style={styles.forgotPassword}>
                Esqueceu-se da sua palavra-passe?
              </Text>
            </Pressable>
          </View>
          <View>
            <Text style={styles.stayLoggedText}>Manter sessão iniciada</Text>
          </View>
          <View style={styles.loginBtnContainer}>
            <Pressable onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;
