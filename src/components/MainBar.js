import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontTisto from 'react-native-vector-icons/Fontisto';

const MainBar = () => {
  return (
    <View style={styles.mainBar}>
      <View style={styles.textOnBar}>
        <Icon name="user-circle-o" size={30} />
        <Text style={styles.textItem}>Hello World</Text>
      </View>
      <View>
        <FontTisto name="bell" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textOnBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textItem: {
    marginLeft: 10,
  },
});

export default MainBar;
