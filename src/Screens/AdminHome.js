import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {Path, Rect, Svg, Line} from 'react-native-svg';
import BackBtn from '../Components/BackBtn';
import avatar from '../../assets/images/avatar.jpg';
import img1 from '../../assets/images/funcionarios.jpg';
import img2 from '../../assets/images/projeto.jpg';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../Context/AuthContext';



const AdminHome = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#6B64FF',
      height: '100%',
      display: 'flex',
      paddingVertical: '17%',
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingLeft: 10
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 12,
    },
    username: {
      paddingLeft: 10,
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 16,
    },
    header: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-Bold',
      fontSize: 37,
      paddingHorizontal: 10,
    },
    subHeader: {
      color: '#faf2ec',
      fontFamily: 'PPNeueMontreal-Medium',
      fontSize: 16,
      paddingHorizontal: 10,
      paddingBottom: 10,
    },
    pressableContainer: {width: '100%', position: 'relative'},
    image: {height: 250, width: null},
    categoryHeaderContainer: {position: 'absolute', bottom: 0},
    categoryHeader: {
      fontFamily: 'PPNeueMontreal-Bold',
      color: '#faf2ec',
      fontSize: 33,
    },
    categorySubHeader: {
      fontFamily: 'PPNeueMontreal-Medium',
      color: '#faf2ec',
      fontSize: 16,
    },
    logoutContainer: {
      position: 'absolute',
      right: 30,
      marginVertical: 75,

    },
  });

  return (
    <View style={styles.mainContainer}>
      <BackBtn navigation={navigation} />
      <View style={styles.userContainer}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.username}>Alexandre Bessa</Text>
      </View>
      <Text style={styles.header}>Ferramentas de Administrador</Text>
      <Text style={styles.subHeader}>
        Controle todos os seus projetos e monitorize os seus funcionários e
        equipas.
      </Text>
      <Pressable
        style={styles.pressableContainer}
        onPress={() => navigation.navigate('Employee')}>
        <ImageBackground source={img1} style={styles.image}>
          <LinearGradient
            colors={['#00000000', '#000000']}
            style={{height: '100%', width: '100%'}}
          />
          <View style={styles.categoryHeaderContainer}>
            <Text style={styles.categoryHeader}>Funcionários</Text>
            <Text style={styles.categorySubHeader}>18 funcionários</Text>
          </View>
        </ImageBackground>
      </Pressable>
      <Pressable
        style={styles.pressableContainer}
        onPress={() => navigation.navigate('Project')}>
        <ImageBackground source={img2} style={styles.image}>
          <LinearGradient
            colors={['#00000000', '#000000']}
            style={{height: '100%', width: '100%'}}
          />
          <View style={styles.categoryHeaderContainer}>
            <Text style={styles.categoryHeader}>Projetos</Text>
            <Text style={styles.categorySubHeader}>4 projetos</Text>
          </View>
        </ImageBackground>
      </Pressable>
      <Pressable onPress={logout} style={styles.logoutContainer}>
        <Svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
            fill="#faf2ec"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </Svg>
      </Pressable>
    </View>
  );
};

export default AdminHome;
