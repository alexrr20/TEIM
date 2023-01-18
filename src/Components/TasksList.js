import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Path, Polygon, Svg} from 'react-native-svg';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {FlatList} from 'react-native-gesture-handler';
import Task from './Task';

const TasksList = () => {
  const {colors} = useTheme();

  const [taskItems, setTarefas] = useState([
    {
      name: 'Tarefa 1',
      project: {name: 'Projeto 1 ', color: '#EE293F'},
      date: ' Ontem',
    },
    {
      name: 'Tarefa 2',
      project: {name: 'Projeto 2 ', color: '#3765DB'},
      date: ' Ontem',
    },
    {
      name: 'Tarefa 3',
      project: {name: 'Projeto 3 ', color: '#FFC145'},
      date: ' Ontem',
    },
    {
      name: 'Tarefa 4',
      project: {name: 'Projeto 4 ', color: '#3DFFA2'},
      date: ' Ontem',
    },
  ]);

  const styles = StyleSheet.create({
    mainContainer: {
      marginTop: 30,
    },
    mainContainerEmpty: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
    },
    emptyText: {
      fontFamily: 'PPNeueMontreal-SemiBold',
      fontSize: 18,
      color: colors.text,
      marginBottom: 10,
    },
    emptySubText: {
      fontFamily: 'PPNeueMontreal-Medium',
      fontSize: 14.22,
      color: colors.text,
      textAlign: 'center',
      lineHeight: 20,
    },
  });

  const renderItems = () => {
    if (taskItems.length === 0) {
      return (
        <View style={styles.mainContainerEmpty}>
          <Text style={styles.emptyText}>Não existem tarefas</Text>
          <Text style={styles.emptySubText}>
            Pode criar novas tarefas através do botão abaixo ou através do
            cronómetro
          </Text>
        </View>
      );
    } else {
      return (
        <FlatList
          style={styles.mainContainer}
          data={taskItems}
          renderItem={item => {
            return <Task data={item} />;
          }}
        />
      );
    }
  };

  return renderItems();
};

export default TasksList;
