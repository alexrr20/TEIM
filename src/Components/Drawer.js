import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Drawer = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    bottomSheetContainer: {
      height: SCREEN_HEIGHT,
      width: '100%',
      backgroundColor: '#121212',
      position: 'absolute',
      zIndex: 5000,
      top: SCREEN_HEIGHT,
      borderRadius: 25,
    },
    line: {
      width: 75,
      height: 4,
      backgroundColor: 'grey',
      alignSelf: 'center',
      marginVertical: 15,
      borderRadius: 5,
    },
    header: {
      marginTop: 10,
      paddingHorizontal: 30,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      height: 100,
    },
    headerText: {
      fontSize: 29,
      color: colors.text,
      fontFamily: 'PPNeueMontreal-Bold',
    },
    headersubText: {
      fontSize: 14,
      color: colors.text,
      fontFamily: 'PPNeueMontreal-Medium',
      lineHeight: 20,
    },
  });

  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 10;

  const scrollTo = useCallback(destination => {
    'worklet';
    translateY.value = withSpring(destination, {damping: 50});
  });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0);
      } else if (translateY.value < SCREEN_HEIGHT / 2) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  useEffect(() => {
    scrollTo(-SCREEN_HEIGHT / 3);
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.ScrollView
        style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Adicionar Tarefa</Text>
          <Text style={styles.headersubText}>
            Pode criar aqui uma nova tarefa. Se ainda não sabe a sua duração,
            sugerimos que use o temporizador.
          </Text>
        </View>
      </Animated.ScrollView>
    </GestureDetector>
  );
};

export default Drawer;
