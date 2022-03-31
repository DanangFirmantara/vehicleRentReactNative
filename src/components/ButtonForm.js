import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const ButtonForm = ({
  children,
  color = 'rgba(255, 205, 97, 1)',
  google = null,
}) => {
  return (
    <View style={buttonStyle.parent}>
      <TouchableOpacity style={[buttonStyle.item, {backgroundColor: color}]}>
        {google && <Icon name="google" size={30} />}
        <Text style={buttonStyle.textItem}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonStyle = StyleSheet.create({
  item: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  textItem: {
    color: 'rgba(57, 57, 57, 1)',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default ButtonForm;
