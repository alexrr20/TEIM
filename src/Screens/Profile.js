import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import {Path, Rect, Svg, Line} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';

const Profile = ({navigation}) => {
  const {colors} = useTheme();

  const [isAdmin, setisAdmin] = useState(true);

  const renderAdmin = () => {
    if (isAdmin) {
      return (
        <Pressable onPress={() => navigation.navigate('AdminHome')}>
          <View style={styles.adminContainer}>
            <View style={styles.leftContainer}>
              <View style={styles.leftTopContainer}>
                <Text style={styles.adminTextBold}>
                  Você é um administrador
                </Text>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="#faf2ec"
                  viewBox="0 0 256 256">
                  <Rect width="256" height="256" fill="none" />
                  <Path
                    d="M37.9,207.9,91.7,59.8a8,8,0,0,1,13.2-2.9l94.2,94.2a8,8,0,0,1-2.9,13.2L48.1,218.1A7.9,7.9,0,0,1,37.9,207.9Z"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="35"
                  />
                  <Path
                    d="M168,72s0-24,24-24,24-24,24-24"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="35"
                  />
                  <Line
                    x1="102.4"
                    y1="198.4"
                    x2="57.6"
                    y2="153.6"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="35"
                  />
                  <Line
                    x1="144"
                    y1="16"
                    x2="144"
                    y2="40"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="35"
                  />
                  <Line
                    x1="216"
                    y1="112"
                    x2="232"
                    y2="128"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="35"
                  />
                  <Line
                    x1="216"
                    y1="80"
                    x2="240"
                    y2="72"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="35"
                  />
                  <Line
                    x1="76.8"
                    y1="100.8"
                    x2="155.2"
                    y2="179.2"
                    fill="none"
                    stroke="#faf2ec"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="35"
                  />
                </Svg>
              </View>
              <Text style={styles.adminTextMedium}>
                Aceda às suas ferramentas
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <Svg
                width="46"
                height="46"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z"
                  fill={colors.notification}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </Svg>
            </View>
          </View>
        </Pressable>
      );
    }
  };

  const styles = StyleSheet.create({
    adminContainer: {
      backgroundColor: colors.notification,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      height: 80,
    },
    leftTopContainer: {
      flexDirection: 'row',
    },
    arrowContainer: {
      backgroundColor: '#1A1920',
      borderRadius: 10,
      height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    adminTextBold: {
      fontFamily: 'PPNeueMontreal-Bold',
      color: colors.text,
      fontSize: 20,
    },
    adminTextMedium: {
      fontFamily: 'PPNeueMontreal-Medium',
      color: colors.text,
      fontSize: 14,
    },
    screen: {
      marginVertical: '17%',
    }
  });

  return (
    <View style={styles.screen}>
      <Header headerText={'Perfil'} />
      {renderAdmin()}
    </View>
  );
};

export default Profile;
