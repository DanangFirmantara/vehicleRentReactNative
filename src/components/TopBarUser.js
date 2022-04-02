import React from 'react';
import imgProfile from '../assets/image/profile.png';
import {HStack, Image, Text} from 'native-base';

const TopBarUser = () => {
  return (
    <HStack alignItems={'center'} marginY={5}>
      <Image
        source={imgProfile}
        alt="profile"
        size={70}
        resizeMode={'contain'}
        borderRadius={150}
      />
      <Text marginX={5} fontSize={22} fontWeight={'bold'}>
        Jack Muller
      </Text>
    </HStack>
  );
};

export default TopBarUser;
