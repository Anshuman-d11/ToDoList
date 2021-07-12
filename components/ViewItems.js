import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ViewItem = props => {
  return (
    <TouchableOpacity>
      <View style={props.k > 0 ? styles.items : styles.items1}>
        <CheckBox
          onValueChange={() => {
            return props.remove(props.k);
          }}
          disabled={false}
          value={props.k < 0}
        />
        <Text style={{fontSize: 18, fontStyle: 'italic'}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  items1: {
    padding: 5,
    backgroundColor: 'grey',
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  text: {
    color: 'red',
  },
  items: {
    padding: 5,
    backgroundColor: 'grey',
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
  },

  newItems: {
    padding: 5,
    backgroundColor: 'grey',
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
  },
});

export default ViewItem;
