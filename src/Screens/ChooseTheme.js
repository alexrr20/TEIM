import React from 'react';
import {Pressable, Text, View} from 'react-native';

function ChooseTheme({navigation}) {
  return (
    <View>
      <Text>Choose Theme</Text>
      <Pressable onPress={() => navigation.navigate('ChangePassword')}>
        <Text>light mode</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ChangePassword')}>
        <Text>dark mode</Text>
      </Pressable>
    </View>
  );
}

export default ChooseTheme;
