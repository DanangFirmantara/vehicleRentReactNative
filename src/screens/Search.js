import {
   Box,
   HStack,
   Input,
   Text,
   FlatList,
   Image,
   VStack,
   Button,
   Spinner,
   Skeleton,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import imgVehicle from '../assets/image/profile.png';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicle } from '../redux/actions/vehicle';
import { BACKEND_URL } from '../../env';
import { reservationClear } from '../redux/actions/reservation';

const Search = () => {
   const [search, setSearch] = useState('');
   const navigation = useNavigation();
   const dispatch = useDispatch();
   const vehicleRedux = useSelector((state) => state.vehicle);

   useEffect(() => {
      if (search === '') {
         dispatch(getVehicle());
      }
      dispatch(reservationClear());
   }, [search, dispatch]);

   return (
      <Container>
         <Box my={4}>
            <Input
               defaultValue={search}
               onChangeText={(text) => {
                  setSearch(text);
                  const param = { name: text };
                  dispatch(getVehicle(param));
               }}
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
                        <Icon
                           name="close"
                           size={20}
                           onPress={() => setSearch('')}
                        />
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
               {({ isHovered, isFocused, isPressed }) => {
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
                           {vehicleRedux.isLoading && (
                              <Spinner color={'rgba(255, 205, 97, 1)'} />
                           )}
                        </HStack>
                     </Box>
                  );
               }}
            </Pressable>
            {vehicleRedux.isLoading &&
               [...Array(5)].map((o, i) => {
                  return (
                     <HStack alignItems={'center'} key={i} my={4}>
                        <Box mr={5}>
                           <Skeleton
                              width={100}
                              height={88}
                              borderRadius={15}
                           />
                        </Box>
                        <VStack space={2} flex={3}>
                           <Skeleton.Text width={'16'} lines={1} />
                           <Skeleton.Text width={'48'} lines={1} />
                           <Skeleton.Text width={90} lines={1} />
                           <Skeleton.Text width={'16'} lines={1} />
                        </VStack>
                     </HStack>
                  );
               })}
            <FlatList
               data={vehicleRedux.data.length > 0 ? vehicleRedux.data : null}
               showsVerticalScrollIndicator={false}
               ListFooterComponent={<Box mb={100} />}
               renderItem={({ item }) => {
                  return (
                     <Button
                        key={item.id}
                        backgroundColor={'transparent'}
                        my={1}
                        justifyContent={'flex-start'}
                        onPress={() => {
                           if (item.status === 'Available') {
                              navigation.navigate('Detail', { id: item.id });
                           }
                        }}>
                        <HStack alignItems={'center'}>
                           <Box mr={5}>
                              <Image
                                 source={
                                    item.image
                                       ? {
                                            uri: item.image.replace(
                                               'http://localhost:5000',
                                               BACKEND_URL,
                                            ),
                                         }
                                       : imgVehicle
                                 }
                                 width={100}
                                 height={88}
                                 resizeMode={'contain'}
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
                              <Text>{item.description}</Text>
                              <Text
                                 color={'rgba(57, 57, 57, 1)'}
                                 fontWeight={'bold'}>
                                 Prepayment : Rp.
                                 {item.price}
                              </Text>
                              <Text
                                 color={
                                    item.status === 'Available'
                                       ? 'green.800'
                                       : 'red.800'
                                 }>
                                 {item.status}
                              </Text>
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
