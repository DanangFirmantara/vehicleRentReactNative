import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({children, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.parent}>
        <Text style={styles.text}>{children}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#23ACE2',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
