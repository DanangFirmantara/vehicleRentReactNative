import {View, Text} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {Image} from 'native-base';
import imgHeader from '../assets/image/home.png';

const HomeAdmin = () => {
  return (
    <Container>
      <Image source={imgHeader} width={'100%'} />
      <View>
        <Text>Profile</Text>
      </View>
    </Container>
  );
};

export default HomeAdmin;
