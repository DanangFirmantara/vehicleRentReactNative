import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HStack, Pressable, Text, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Link = ({ children }) => {
   const navigation = useNavigation();
   return (
      <View>
         <Pressable onPress={() => navigation.goBack()}>
            <HStack
               paddingHorizontal={20}
               py={2}
               alignItems={'center'}
               bg={'transparent'}>
               <Icon name="chevron-left" size={20} />
               <Text fontSize={24} fontWeight={'bold'} marginLeft={4} pb={2}>
                  {children}
               </Text>
            </HStack>
         </Pressable>
      </View>
   );
};

export default Link;
