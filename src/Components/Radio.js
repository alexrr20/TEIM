import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Pressable} from 'react-native'; //additional import.
import {useTheme} from '@react-navigation/native';

const Radio = ({data}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {flexDirection: 'row', marginLeft: 20},
    selected: {
      borderRadius: 30,
      borderColor: colors.notification,
      borderWidth: 2,
      backgroundColor: colors.card,
    },
    unselected: {
      borderRadius: 30,
      borderColor: colors.border,
      borderWidth: 2,
      backgroundColor: '#1A1920',
    },
    text: {
      fontFamily: 'PPNeueMontreal-Medium',
      color: colors.text,
      paddingVertical: 5,
      paddingRight: 11,
      paddingLeft: 8,
    },
  });

  const [userOption, setUserOption] = useState(null);

  return (
    <View style={styles.mainContainer}>
      {data.map(item => {
        return (
          <Pressable
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => setUserOption(item.value)}>
            <Text style={styles.text}> {item.value}</Text>
          </Pressable>
        );
      })}
      <Text>{userOption}</Text>
    </View>
  );
};

export default Radio;

//code to change of 'return' block in RadioButton.js
