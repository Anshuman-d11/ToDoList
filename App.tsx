/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
  Alert,
  Button,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MyButton from './components/MyButton';
import ListScreen from './screen/ListScreen';
import ViewItem from './components/ViewItems';
const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.view1}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [enteredItem, setEnteredItem] = useState('');
  const [listItems, setListItems] = useState([]);
  const [value1, setValue1] = useState('');
  const [isSelected, setSelection] = useState(false);
  const listInputHandler = enteredText => {
    console.log(enteredText);
    setEnteredItem(enteredText);
  };

  if (value1) {
    setListItems(currentList => [
      ...listItems,
      {key: (Math.random() * -1).toString(), value: value1},
    ]);

    setValue1('');
  }

  const removeHandler = goal_key => {
    let val;

    if (goal_key < 0) {
      Alert.alert('Task Completed');
    }
    setListItems(currentgoals => {
      return currentgoals.filter(function (goal) {
        if (goal_key !== goal.key) return true;
        else {
          val = goal.value;
          return false;
        }
      });
    });

    setValue1(val);
  };

  const addGoalHandler = () => {
    //console.log(listItems) ;

    setListItems(currentList => [
      {key: Math.random().toString(), value: enteredItem},
      ...listItems,
    ]);

    setEnteredItem('');
  };

  return (
    <View
      style={{
        backgroundColor: isSelected ? 'black' : 'white',
        flex: 1,
        padding: 15,
      }}>
      <View style={styles.darkScreen}>
        <Text style={{color: 'blue'}}> Enable Dark Mode </Text>

        <CheckBox value={isSelected} onValueChange={setSelection} />
      </View>
      <ListScreen
        func1={listInputHandler}
        val1={enteredItem}
        func2={addGoalHandler}
      />

      <FlatList
        data={listItems}
        renderItem={input_data => (
          <ViewItem
            k={input_data.item.key}
            remove={removeHandler}
            title={input_data.item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  darkScreen: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  view1: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text_input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
