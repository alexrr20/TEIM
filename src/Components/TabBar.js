import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Path, Svg} from 'react-native-svg';

export const MyTabBar = ({state, descriptors, navigation}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'column',
      backgroundColor: colors.background,
      borderTopColor: colors.border,
      borderTopWidth: 1,
      height: 160,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    topContainer: {
      flexDirection: 'row',
      flex: 1,
      paddingVertical: 20,
    },
    addTaskBtn: {
      backgroundColor: colors.notification,
      flex: 2,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addTaskText: {
      fontFamily: 'PPNeueMontreal-SemiBold',
      color: colors.text,
    },
    timerBtn: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.notification,
      borderRadius: 30,
    },
    bottomContainer: {
      flexDirection: 'row',
      backgroundColor: colors.border,
      flex: 1,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Pressable style={styles.addTaskBtn}>
          <Text style={styles.addTaskText}>Adicionar Tarefa</Text>
        </Pressable>
        <Pressable style={styles.timerBtn}>
          <Svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M7.49998 0.849976C7.22383 0.849976 6.99998 1.07383 6.99998 1.34998V3.52234C6.99998 3.79848 7.22383 4.02234 7.49998 4.02234C7.77612 4.02234 7.99998 3.79848 7.99998 3.52234V1.8718C10.8862 2.12488 13.15 4.54806 13.15 7.49998C13.15 10.6204 10.6204 13.15 7.49998 13.15C4.37957 13.15 1.84998 10.6204 1.84998 7.49998C1.84998 6.10612 2.35407 4.83128 3.19049 3.8459C3.36919 3.63538 3.34339 3.31985 3.13286 3.14115C2.92234 2.96245 2.60681 2.98825 2.42811 3.19877C1.44405 4.35808 0.849976 5.86029 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976ZM6.74049 8.08072L4.22363 4.57237C4.15231 4.47295 4.16346 4.33652 4.24998 4.25C4.33649 4.16348 4.47293 4.15233 4.57234 4.22365L8.08069 6.74051C8.56227 7.08599 8.61906 7.78091 8.19998 8.2C7.78089 8.61909 7.08597 8.56229 6.74049 8.08072Z"
              fill={colors.text}
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </Svg>
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, alignItems: 'center'}}>
              <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
