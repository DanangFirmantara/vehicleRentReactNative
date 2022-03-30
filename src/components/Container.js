import {View, StyleSheet} from 'react-native';
import React from 'react';

const Container = ({children}) => {
  return <View style={styles.parent}>{children}</View>;
};

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
});

export default Container;
