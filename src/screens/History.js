import {
   Text,
   FlatList,
   Pressable,
   Box,
   HStack,
   VStack,
   Image,
} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';
import Container from '../components/Container';
import imgVehicle from '../assets/image/profile.png';

const History = () => {
   const data = [
      {
         menu: 'User 3 has finished the payment',
      },
      {
         menu: 'User 3’s payment for a vintage bike at Jogja just confirmed!',
      },
   ];
   const history = [
      {
         img: imgVehicle,
         name: 'Vespa Matic',
         prepayment: 245000,
         status: 'Finished',
         id: 1,
      },
      {
         img: imgVehicle,
         name: 'Vespa Matic',
         prepayment: 245000,
         status: 'Finished',
         id: 2,
      },
      {
         img: imgVehicle,
         name: 'Vespa Matic',
         prepayment: 245000,
         status: 'Finished',
         id: 3,
      },
      {
         img: imgVehicle,
         name: 'Vespa Matic',
         prepayment: 245000,
         status: 'Finished',
         id: 4,
      },
      {
         img: imgVehicle,
         name: 'Vespa Matic',
         prepayment: 245000,
         status: 'Finished',
         id: 5,
      },
      {
         img: imgVehicle,
         name: 'Vespa Matic',
         prepayment: 245000,
         status: 'Finished',
         id: 6,
      },
      {
         img: imgVehicle,
         name: 'Vespa Matic',
         prepayment: 245000,
         status: 'Finished',
         id: 7,
      },
   ];
   return (
      <Container>
         <Box>
            <Text fontSize={18} color={'rgba(196, 196, 196, 1)'} marginTop={5}>
               Today
            </Text>
            <FlatList
               data={data}
               height={150}
               renderItem={({ item }) => {
                  return (
                     <Pressable>
                        {({ isHovered, isFocused, isPressed }) => {
                           return (
                              <Box
                                 py="2"
                                 bg={
                                    isPressed
                                       ? 'coolGray.200'
                                       : isHovered
                                       ? 'coolGray.200'
                                       : 'transparent'
                                 }>
                                 <HStack alignItems={'center'}>
                                    <Text
                                       fontSize={18}
                                       fontWeight={600}
                                       flex={1}
                                       color={'rgba(57, 57, 57, 1)'}>
                                       {item.menu}
                                    </Text>
                                    <Icon name="chevron-right" size={30} />
                                 </HStack>
                              </Box>
                           );
                        }}
                     </Pressable>
                  );
               }}
            />
            <Text fontSize={18} color={'rgba(196, 196, 196, 1)'} my={5}>
               A week ago
            </Text>
            <FlatList
               data={history}
               showsVerticalScrollIndicator={false}
               renderItem={({ item }) => {
                  return (
                     <Box my={2}>
                        <HStack alignItems={'center'} key={item.id}>
                           <Box mr={5}>
                              <Image
                                 source={item.img}
                                 width={100}
                                 height={88}
                                 borderRadius={15}
                                 alt={String(item.id)}
                              />
                           </Box>
                           <VStack space={1}>
                              <Text
                                 color={'rgba(57, 57, 57, 1)'}
                                 fontWeight={'bold'}>
                                 {item.name}
                              </Text>
                              <Text>Jan 18 to 21 2021</Text>
                              <Text
                                 color={'rgba(57, 57, 57, 1)'}
                                 fontWeight={'bold'}>
                                 Prepayment : Rp.{item.prepayment}
                              </Text>
                              <Text color={'green.900'}>{item.status}</Text>
                           </VStack>
                        </HStack>
                     </Box>
                  );
               }}
            />
         </Box>
      </Container>
   );
};

export default History;
