import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Input = ({children}) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={children}
        placeholderTextColor="white"
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(223, 222, 222, 0.5)',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  textInput: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Input;
