import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import Tasks from '../Components/Tasks';
import DropDownPicker from 'react-native-dropdown-picker';
import {Path, Svg} from 'react-native-svg';
import SearchBar from 'react-native-dynamic-search-bar';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const styles = StyleSheet.create({
    dropdownContainer: {
      flexDirection: 'row',
    },
    searchBar: {
      marginVertical: 20,
      height: 50,
      backgroundColor: '#222148',
      borderWidth: 1,
      borderColor: '#847EFF',
    },
  });

  return (
    <View>
      <Header headerText={'Página Inicial'} />
      <View>
        <SearchBar
          placeholder="tarefa / projeto / cliente / equipa"
          placeholderTextColor="#faf2ec"
          fontColor="#faf2ec"
          backgroundColor="#222148"
          fontFamily="PPNeueMontreal-Medium"
          onChangeText={text => console.log(text)}
          style={styles.searchBar}
        />
      </View>
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{
            backgroundColor: '#1A1920',
            borderColor: '#242424',
          }}
          dropDownContainerStyle={{
            backgroundColor: '#1A1920',
            borderColor: '#242424',
          }}
          textStyle={{
            fontSize: 14,
            color: '#faf2ec',
          }}
          containerStyle={{
            flex: 1,
            marginHorizontal: 30,
          }}
          zIndex={3000}
          zIndexInverse={1000}
          placeholder="Ordenar por"
          placeholderStyle={{fontFamily: 'PPNeueMontreal-Medium'}}
          showArrowIcon={true}
          ArrowDownIconComponent={({style}) => (
            <Svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                fill="#faf2ec"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </Svg>
          )}
        />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{
            backgroundColor: '#1A1920',
            borderColor: '#242424',
          }}
          dropDownContainerStyle={{
            backgroundColor: '#1A1920',
            borderColor: '#242424',
          }}
          textStyle={{
            fontSize: 14,
            color: '#faf2ec',
          }}
          containerStyle={{
            flex: 1,
            marginHorizontal: 30,
          }}
          zIndex={2000}
          zIndexInverse={2000}
          placeholderStyle={{fontFamily: 'PPNeueMontreal-Medium'}}
        />
      </View>
      <Tasks />
    </View>
  );
}
