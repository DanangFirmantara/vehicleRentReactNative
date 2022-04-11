/* eslint-disable react-hooks/exhaustive-deps */
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
import React, { useEffect } from 'react';
import Container from '../components/Container';
import imgVehicle from '../assets/image/profile.png';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../redux/actions/history';
import { BACKEND_URL } from '../../env';

const History = () => {
   const dispatch = useDispatch();
   const auth = useSelector((state) => state.auth);
   const history = useSelector((state) => state.history);
   useEffect(() => {
      dispatch(getHistory(auth.token));
   }, [dispatch]);

   const data = [
      {
         menu: 'User 3 has finished the payment',
      },
      {
         menu: 'User 3’s payment for a vintage bike at Jogja just confirmed!',
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
               data={history.data.length > 0 ? history.data : null}
               showsVerticalScrollIndicator={false}
               ListFooterComponent={<Box mb={280} />}
               renderItem={({ item }) => {
                  return (
                     <Box my={2}>
                        <HStack alignItems={'center'} key={item.id}>
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
                                 borderRadius={15}
                                 resizeMode={'contain'}
                                 alt={String(item.id)}
                              />
                           </Box>
                           <VStack space={1}>
                              <Text
                                 color={'rgba(57, 57, 57, 1)'}
                                 fontWeight={'bold'}>
                                 {item.vehicleName}
                              </Text>
                              <Text>
                                 {item.rentStartDate} to {item.rentEndDate}
                              </Text>
                              <Text
                                 color={'rgba(57, 57, 57, 1)'}
                                 fontWeight={'bold'}>
                                 Prepayment : Rp.{item.total}
                              </Text>
                              <Text
                                 color={
                                    item.status === 1 ? 'green.800' : 'red.800'
                                 }>
                                 {item.status === 1 ? 'Paid' : 'Not Paid'}
                              </Text>
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
