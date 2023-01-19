import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext} from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const getToken = async () => {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  };

  const getTasks = async () => {
    const token = await getToken();
    const config = {
      headers: {Authorization: `Bearer ${token}`},
    };
    const bodyParameters = {
      key: 'value',
    };
    console.log(bodyParameters, config);

    await axios
      .get('https://teim.onrender.com/api-docs/#/tasks', config, bodyParameters)
      .then(function (response) {
        try {
          console.log(response.data);
        } catch (e) {
          console.log(e);
        } // your catch block
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <TaskContext.Provider value={{getTasks, getToken}}>
      {children}
    </TaskContext.Provider>
  );
};
