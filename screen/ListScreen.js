import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Modal,
  Appearance,
  ProgressBarAndroidBase,
} from 'react-native';
import {create} from 'react-test-renderer';
import MyButton from '../components/MyButton';

const ListScreen = props => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <TextInput
          placeholder="To do List"
          style={styles.text_input}
          onChangeText={props.func1}
          value={props.val1}
        />
        <View style={styles.buttonContainer}>
          <MyButton title="ADD" onPress={props.func2} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    alignSelf: 'center',
  },
  view1: {
    paddingHorizontal: 2,
    width: '100%',
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },

  text_input: {
    width: '70%',
    height: 40,
    borderColor: 'blue',
    borderWidth: 2,
    color: 'white',
    backgroundColor: 'grey',
  },
});

export default ListScreen;
