import React from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';

function Login() {
  const styles = StyleSheet.create({
    input: {
      backgroundColor: '#faf2ec',
    },
    loginContainer: {
      display: 'flex',
      backgroundColor: '#141414',
    },
    loginButtonText: {
      color: '#141414',
    },
    loginButton: {
      backgroundColor: '#faf2ec',
      paddingHorizontal: 32,
      paddingVertical: 8,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View>
      <Text>Login</Text>
      <View style={styles.loginContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Pressable onPress={handleSubmit} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

export default Login;
