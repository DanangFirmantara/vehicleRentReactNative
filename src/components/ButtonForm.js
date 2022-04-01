import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const ButtonForm = ({
  children,
  color = 'rgba(255, 205, 97, 1)',
  textColor = 'rgba(57, 57, 57, 1)',
  google = null,
  to = null,
}) => {
  const navigation = useNavigation();
  const onPress = () => {
    if (to) {
      navigation.navigate(to);
    }
  };
  return (
    <View style={buttonStyle.parent}>
      <TouchableOpacity
        style={[buttonStyle.item, {backgroundColor: color}]}
        onPress={onPress}>
        {google && <Icon name="google" size={30} />}
        <Text style={[buttonStyle.textItem, {color: textColor}]}>
          {children}
        </Text>
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonForm;
