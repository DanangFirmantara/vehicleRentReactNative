import {
   HStack,
   Image,
   Text,
   VStack,
   Box,
   Button,
   Input,
   Skeleton,
} from 'native-base';
import React, { useEffect } from 'react';
import Container from '../components/Container';
import imgDetail from '../assets/image/home.png';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getVehicle } from '../redux/actions/vehicle';
import { BACKEND_URL } from '../../env';

const Detail = ({ route }) => {
   const { id } = route.params;
   const vehicle = useSelector((state) => state.vehicle);
   const data = vehicle.data;
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getDetail(id));
      return function cleanup() {
         dispatch(getVehicle());
      };
   }, [dispatch, id]);
   const navigation = useNavigation();
   return (
      <>
         <Box position={'relative'}>
            {!vehicle.isLoading && (
               <Image
                  source={
                     data.image
                        ? {
                             uri: data.image.replace(
                                'http://localhost:5000',
                                BACKEND_URL,
                             ),
                          }
                        : imgDetail
                  }
                  width={'100%'}
                  alt="imgDetail"
                  height={267}
               />
            )}
            {vehicle.isLoading && <Skeleton width={'100%'} height={267} />}
            <Pressable position="absolute" onPress={() => navigation.goBack()}>
               <Box m={4}>
                  <FaIcon name={'chevron-left'} size={20} color={'white'} />
               </Box>
            </Pressable>
         </Box>
         <Container>
            {vehicle.isLoading && (
               <VStack space={2}>
                  <VStack my={2}>
                     <HStack>
                        <VStack flex={1}>
                           <Skeleton height={6} width={'32'} />
                        </VStack>
                        <IonIcon
                           name="ios-chatbubble-outline"
                           color={'rgba(255, 205, 97, 1)'}
                           size={30}
                        />
                     </HStack>
                  </VStack>
                  <Skeleton height={6} width={'32'} />
                  <Skeleton height={6} width={'32'} />
                  <Skeleton height={6} width={'32'} />
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

                     <Skeleton height={6} width={'32'} />
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

                     <Skeleton height={6} width={'32'} />
                  </HStack>
               </VStack>
            )}
            {!vehicle.isLoading && (
               <>
                  <VStack space={2}>
                     <VStack my={2}>
                        <HStack>
                           <VStack flex={1}>
                              <Text fontSize={28} fontWeight={'semibold'}>
                                 {data.name}
                              </Text>
                              <Text fontSize={28} fontWeight={'semibold'}>
                                 Rp.
                                 {data.price}
                                 /day
                              </Text>
                           </VStack>
                           <IonIcon
                              name="ios-chatbubble-outline"
                              color={'rgba(255, 205, 97, 1)'}
                              size={30}
                           />
                        </HStack>
                     </VStack>
                     <Text fontSize={16} fontWeight={'light'}>
                        {data.description}
                     </Text>
                     <Text fontSize={16} fontWeight={'light'}>
                        No Prepayment
                     </Text>
                     <Text
                        fontSize={16}
                        fontWeight={'bold'}
                        color={'green.800'}>
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
                        <Text flex={1}>Select Bikes</Text>
                        <HStack space={4} alignItems={'center'}>
                           <Button
                              borderRadius={100}
                              bg={'rgba(255, 205, 97, 1)'}>
                              <Text fontWeight={'extrabold'} fontSize={17}>
                                 -
                              </Text>
                           </Button>
                           <Text fontWeight={'extrabold'} fontSize={17}>
                              2
                           </Text>
                           <Button
                              borderRadius={100}
                              bg={'rgba(255, 205, 97, 1)'}>
                              <Text fontWeight={'extrabold'} fontSize={17}>
                                 +
                              </Text>
                           </Button>
                        </HStack>
                     </HStack>
                     <HStack my={2}>
                        <Input
                           bg="rgba(223, 222, 222, 0.5)"
                           color="rgba(57, 57, 57, 0.8)"
                           variant="filled"
                           paddingLeft={5}
                           fontSize={12}
                           fontWeight="bold"
                           placeholder={'Select date'}
                           placeholderTextColor="rgba(57, 57, 57, 0.8)"
                           flex={1}
                           borderRadius={10}
                        />
                        <Input
                           bg="rgba(223, 222, 222, 0.5)"
                           color="rgba(57, 57, 57, 0.8)"
                           variant="filled"
                           paddingLeft={5}
                           fontSize={12}
                           fontWeight="bold"
                           placeholder={'1 Day'}
                           w={20}
                           ml={4}
                           placeholderTextColor="rgba(57, 57, 57, 0.8)"
                           borderRadius={10}
                        />
                     </HStack>
                  </VStack>
                  <Button
                     height={50}
                     bg={'rgba(255, 205, 97, 1)'}
                     borderRadius={10}
                     onPress={() => navigation.navigate('Reservation')}>
                     <Text
                        color={'rgba(57, 57, 57, 1)'}
                        fontWeight="bold"
                        fontSize={18}>
                        Reservation
                     </Text>
                  </Button>
               </>
            )}
         </Container>
      </>
   );
};

export default Detail;
