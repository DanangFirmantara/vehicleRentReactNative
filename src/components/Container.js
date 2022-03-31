import {View, StyleSheet} from 'react-native';
import React from 'react';

const Container = ({children}) => {
  return <View style={styles.parent}>{children}</View>;
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

export default Container;
