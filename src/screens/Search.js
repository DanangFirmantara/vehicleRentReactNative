import {
   Box,
   HStack,
   Input,
   Text,
   FlatList,
   Image,
   VStack,
   Button,
} from 'native-base';
import React from 'react';
import Container from '../components/Container';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useNavigation} from '@react-navigation/native';
import imgVehicle from '../assets/image/profile.png';

const Search = () => {
   const navigation = useNavigation();
   const vehicle = [
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
         <Box my={4}>
            <Input
               InputLeftElement={
                  <>
                     <Box mx={4}>
                        <Icon name="search" size={20} />
                     </Box>
                  </>
               }
               InputRightElement={
                  <>
                     <Box mx={4}>
                        <Icon name="close" size={20} />
                     </Box>
                  </>
               }
               placeholder={'search'}
               fontSize={18}
               backgroundColor={'rgba(223, 222, 222, 1)'}
               borderRadius={15}
               mb={4}
            />
            <Pressable onPress={() => navigation.navigate('Filter')}>
               {({isHovered, isFocused, isPressed}) => {
                  return (
                     <Box
                        py="2"
                        px="2"
                        bg={
                           isPressed
                              ? 'coolGray.200'
                              : isHovered
                              ? 'coolGray.200'
                              : 'transparent'
                        }>
                        <HStack alignItems={'center'} space={5}>
                           <Icon name="filter" size={30} />
                           <Text fontSize={18} fontWeight={600} flex={1}>
                              Filter
                           </Text>
                        </HStack>
                     </Box>
                  );
               }}
            </Pressable>
            <FlatList
               data={vehicle}
               showsVerticalScrollIndicator={false}
               renderItem={({item}) => {
                  return (
                     <Button
                        backgroundColor={'transparent'}
                        my={1}
                        justifyContent={'flex-start'}
                        onPress={() => navigation.navigate('Detail', {id: 1})}>
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
                     </Button>
                  );
               }}
            />
         </Box>
      </Container>
   );
};

export default Search;
