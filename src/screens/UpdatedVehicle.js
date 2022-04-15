/* eslint-disable react-hooks/exhaustive-deps */
import {
   HStack,
   Image,
   Text,
   VStack,
   Box,
   Button,
   Skeleton,
   Input,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import imgDetail from '../assets/image/home.png';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import FaIcon from 'react-native-vector-icons/FontAwesome';
// import AntIcon from 'react-native-vector-icons/AntDesign';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getVehicle } from '../redux/actions/vehicle';

const UpdatedVehicle = ({ route }) => {
   const [edit, setEdit] = useState(false);
   const [changed, setChanged] = useState({});
   const { id } = route.params;
   const vehicle = useSelector((state) => state.vehicle);

   const data = vehicle.detail;
   const dispatch = useDispatch();
   useEffect(() => {
      if (vehicle.detail.id !== id) {
         dispatch(getDetail(id));
      }
      return function cleanup() {
         dispatch(getVehicle());
      };
   }, [dispatch]);
   const navigation = useNavigation();
   const increament = () => {
      if (!changed.stock) {
         setChanged({ ...changed, stock: data.stock + 1 });
      } else {
         setChanged({ ...changed, stock: changed.stock + 1 });
      }
   };
   const decreament = () => {
      if (!changed.stock) {
         if (data.stock > 0) {
            setChanged({ ...changed, stock: data.stock - 1 });
         }
      } else {
         if (changed.stock > 0) {
            setChanged({ ...changed, stock: changed.stock - 1 });
         }
      }
   };

   const onUpdated = () => {
      console.log(changed);
   };
   return (
      <>
         <Box position={'relative'}>
            {!vehicle.isLoading && (
               <Image
                  source={
                     data.image
                        ? {
                             uri: data.image,
                          }
                        : imgDetail
                  }
                  resizeMode={'contain'}
                  width={'100%'}
                  alt="imgDetail"
                  height={267}
               />
            )}
            {vehicle.isLoading && <Skeleton width={'100%'} height={267} />}
            <HStack position="absolute" m={4}>
               <Pressable onPress={() => navigation.goBack()} flex={1}>
                  <Box>
                     <FaIcon
                        name={'chevron-left'}
                        size={20}
                        color={'black.100'}
                     />
                  </Box>
               </Pressable>
               <Button
                  colorScheme={'amber.400'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  bg={'amber.100'}
                  w={35}
                  h={35}
                  borderRadius={100}
                  shadow={2}>
                  <Box
                     w={35}
                     h={35}
                     justifyContent={'center'}
                     alignItems={'center'}>
                     <MaterialIcon
                        name={'delete'}
                        size={20}
                        color={'black.100'}
                     />
                  </Box>
               </Button>
            </HStack>
         </Box>
         <Container>
            <VStack space={2}>
               <VStack my={2}>
                  <HStack>
                     <VStack flex={1}>
                        {!edit ? (
                           <Text fontSize={28} fontWeight={'semibold'}>
                              {changed.name ? changed.name : data.name}
                           </Text>
                        ) : (
                           <Input
                              p={0}
                              color={'grey.300'}
                              variant={'unstyled'}
                              defaultValue={data.name}
                              fontSize={28}
                              fontWeight={'semibold'}
                              onChangeText={(text) =>
                                 setChanged({ ...changed, name: text })
                              }
                           />
                        )}
                        {!edit ? (
                           <Text fontSize={28} fontWeight={'semibold'}>
                              Rp.
                              {changed.price ? changed.price : data.price}
                              /day
                           </Text>
                        ) : (
                           <HStack space={2} alignItems={'center'}>
                              <Text fontSize={28} fontWeight={'semibold'}>
                                 Rp.
                              </Text>
                              <Input
                                 p={0}
                                 color={'grey.300'}
                                 variant={'unstyled'}
                                 defaultValue={String(data.price)}
                                 fontSize={28}
                                 fontWeight={'semibold'}
                                 onChangeText={(text) =>
                                    setChanged({ ...changed, price: text })
                                 }
                              />
                              <Text fontSize={28} fontWeight={'semibold'}>
                                 /day
                              </Text>
                           </HStack>
                        )}
                     </VStack>
                     <Box alignItems={'center'} justifyContent={'center'}>
                        {/* <HStack
                           borderLeftRadius={10}
                           borderRightRadius={10}
                           alignItems={'center'}
                           justifyContent={'center'}
                           space={2}
                           py={2}
                           px={'4'}
                           bg={'amber.100'}>
                           <Text
                              fontSize={15}
                              color={'rgba(255, 205, 97, 1)'}
                              fontWeight={'bold'}>
                              4.5
                           </Text>
                           <AntIcon
                              name={'star'}
                              color={'rgba(255, 205, 97, 1)'}
                              size={15}
                           />
                        </HStack> */}
                        <Button
                           colorScheme={'amber.400'}
                           justifyContent={'center'}
                           alignItems={'center'}
                           bg={'amber.100'}
                           w={35}
                           h={35}
                           borderRadius={100}
                           shadow={2}
                           onPress={() => setEdit(!edit)}>
                           <Box
                              w={35}
                              h={35}
                              justifyContent={'center'}
                              alignItems={'center'}>
                              <FoundationIcon
                                 name={'pencil'}
                                 size={20}
                                 color={'black.100'}
                              />
                           </Box>
                        </Button>
                     </Box>
                  </HStack>
               </VStack>
               {!edit ? (
                  <Text fontSize={16} fontWeight={'light'}>
                     {changed.description
                        ? changed.description
                        : data.description}
                  </Text>
               ) : (
                  <Input
                     p={0}
                     color={'grey.300'}
                     variant={'unstyled'}
                     defaultValue={data.description}
                     fontSize={16}
                     onChangeText={(text) =>
                        setChanged({ ...changed, description: text })
                     }
                  />
               )}
               <Text fontSize={16} fontWeight={'light'}>
                  No Prepayment
               </Text>
               <Text fontSize={16} fontWeight={'bold'} color={'green.800'}>
                  {data.status}
               </Text>
               <HStack alignItems={'center'} space={4} my={2}>
                  <Box
                     bg={'rgba(255, 199, 167, 0.2)'}
                     size={8}
                     borderRadius={5}
                     alignItems={'center'}
                     justifyContent={'center'}>
                     <FeatherIcon
                        name="map-pin"
                        size={20}
                        color={'rgba(255, 205, 97, 1)'}
                     />
                  </Box>

                  <Text color={'muted.500'} fontSize={'17'}>
                     Jalan Maliboboro, No. 21, Yogyakarta
                  </Text>
               </HStack>
               <HStack alignItems={'center'} space={4}>
                  <Box
                     bg={'rgba(255, 199, 167, 0.2)'}
                     size={8}
                     borderRadius={5}
                     alignItems={'center'}
                     justifyContent={'center'}>
                     <Icon
                        name="walking"
                        size={20}
                        color={'rgba(255, 205, 97, 1)'}
                     />
                  </Box>
                  <Text color={'muted.500'} fontSize={'17'}>
                     3.2 miles from your location
                  </Text>
               </HStack>
               <HStack alignItems={'center'}>
                  <Text flex={1} fontSize={16} fontWeight={'bold'}>
                     Update stock
                  </Text>
                  <HStack space={4} alignItems={'center'}>
                     <Button
                        borderRadius={100}
                        bg={'rgba(255, 205, 97, 1)'}
                        onPress={decreament}>
                        <Text fontWeight={'extrabold'} fontSize={17}>
                           -
                        </Text>
                     </Button>
                     <Text fontWeight={'extrabold'} fontSize={17}>
                        {changed.stock ? changed.stock : data.stock}
                     </Text>
                     <Button
                        borderRadius={100}
                        bg={'rgba(255, 205, 97, 1)'}
                        onPress={increament}>
                        <Text fontWeight={'extrabold'} fontSize={17}>
                           +
                        </Text>
                     </Button>
                  </HStack>
               </HStack>
               <Box
                  bg={'black.100'}
                  height={50}
                  alignItems={'center'}
                  justifyContent={'center'}
                  my={2}
                  borderRadius={10}>
                  <HStack
                     justifyContent={'space-between'}
                     alignItems={'center'}
                     width={'full'}
                     px={2}
                     space={2}
                     shadow={2}>
                     <Box
                        height={47}
                        borderRadius={10}
                        bg={
                           data.status === 'Available'
                              ? 'rgba(57, 57, 57, 1)'
                              : 'rgba(239, 239, 239, 1)'
                        }
                        flex={1}
                        alignItems={'center'}
                        justifyContent={'center'}
                        shadow={2}>
                        <Text
                           color={
                              data.status === 'Available'
                                 ? 'rgba(255, 205, 97, 1)'
                                 : 'rgba(159, 159, 159, 1)'
                           }
                           fontWeight="bold"
                           fontSize={18}>
                           Available
                        </Text>
                     </Box>
                     <Box
                        height={47}
                        borderRadius={10}
                        bg={
                           data.status === 'full booked'
                              ? 'rgba(255, 205, 97, 1)'
                              : 'rgba(239, 239, 239, 1)'
                        }
                        flex={1}
                        alignItems={'center'}
                        justifyContent={'center'}
                        shadow={2}>
                        <Text
                           color={
                              data.status === 'full booked'
                                 ? 'rgba(57, 57, 57, 1)'
                                 : 'rgba(159, 159, 159, 1)'
                           }
                           fontWeight="bold"
                           fontSize={18}>
                           Full Booked
                        </Text>
                     </Box>
                  </HStack>
               </Box>
            </VStack>
            <Button
               height={50}
               bg={'rgba(255, 205, 97, 1)'}
               borderRadius={10}
               onPress={onUpdated}
               shadow={2}>
               <Text
                  color={'rgba(57, 57, 57, 1)'}
                  fontWeight="bold"
                  fontSize={18}>
                  Update Item
               </Text>
            </Button>
         </Container>
      </>
   );
};

export default UpdatedVehicle;
