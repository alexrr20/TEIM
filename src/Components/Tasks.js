import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';

const Tasks = () => {
  const {colors} = useTheme();

  const [taskItems, setTarefas] = useState([
    {name: 'Tarefa 1', projectName: 'Projeto 1'},
    {name: 'Tarefa 2', projectName: 'Projeto 1'},
    {name: 'Tarefa 3', projectName: 'Projeto 1'},
    {name: 'Tarefa 4', projectName: 'Projeto 1'},
  ]);

  const styles = StyleSheet.create({
    taskContainer: {
      backgroundColor: colors.border,
      marginTop: 10,
      marginBottom: 10,
    },
  });

  return (
    <View>
      {taskItems.map((item, index) => {
        return (
          <ScrollView style={styles.taskContainer}>
            <Text key={index}>{item.name}</Text>
            <Text>{item.projectName}</Text>
          </ScrollView>
        );
      })}
    </View>
  );
};

export default Tasks;
