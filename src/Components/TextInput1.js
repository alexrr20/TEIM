import React from 'react';
import {Controller} from 'react-hook-form';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PasswordVisibility from '../Hooks/PasswordVisibility';

function textInput1({control, name}) {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    PasswordVisibility();

  const styles = StyleSheet.create({
    label: {
      fontSize: 12.64,
      fontFamily: 'PPNeueMontreal-SemiBold',
      color: '#141414',
    },
    mainContainer: {
      backgroundColor: '#faf2ec',
      borderRadius: 4,
      height: 130,
    },
    inputContainer1: {
      paddingLeft: 15,
      paddingTop: 15,
      borderColor: '#E2E2E2',
      borderWidth: 0.25,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      height: 65,
    },
    inputContainer2: {
      paddingLeft: 15,
      paddingTop: 15,
      borderColor: '#E2E2E2',
      borderWidth: 1,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      height: 65,
    },
    toggle: {
      color: 'white',
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer1}>
        <Text style={styles.label}>{name[0]}</Text>
        <Controller
          control={control}
          name={name[0]}
          render={({field: {value, onChange}}) => (
            <TextInput
              value={value}
              onTextChange={onChange}
              autoCorrect={false}
            />
          )}
        />
      </View>
      <View style={styles.inputContainer2}>
        <Text style={styles.label}>{name[1]}</Text>
        <Controller
          control={control}
          name={name[1]}
          render={({field: {value, onChange}}) => (
            <TextInput
              value={value}
              onTextChange={onChange}
              autoCorrect={false}
              secureTextEntry={passwordVisibility}
            />
          )}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <Text style={styles.toggle}>Toggle</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default textInput1;
