import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MyButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});

export default MyButton;
