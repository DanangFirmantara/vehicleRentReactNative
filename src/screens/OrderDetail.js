import React from 'react';
import Container from '../components/Container';
import {
   Box,
   Button,
   Divider,
   Image,
   Text as NvText,
   VStack,
} from 'native-base';
import ImgVehicle from '../assets/image/vehicle.png';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { BACKEND_URL } from '../../env';
import { postPayment } from '../redux/actions/payment';

const OrderDetail = () => {
   const navigation = useNavigation();
   const vehicle = useSelector((state) => state.vehicle);
   const detail = vehicle.detail;
   const auth = useSelector((state) => state.auth);
   const reservation = useSelector((state) => state.reservation);
   const dispatch = useDispatch();
   const onPayment = () => {
      const rentStartDate = reservation.startDate;
      const rentEndDate = reservation.endDate;
      const vehicleId = detail.id;
      const quantity = reservation.quantity;
      const idReservation = reservation.data.id;
      const token = auth.token;
      dispatch(
         postPayment(
            rentStartDate,
            rentEndDate,
            vehicleId,
            quantity,
            idReservation,
            token,
         ),
      );
      navigation.navigate('FinishPayment');
   };
   return (
      <Container>
         <Box justifyContent={'center'} alignItems={'center'} py={6}>
            <NvText fontSize={16}>Your booking code</NvText>
            <NvText fontSize={24} fontWeight={'bold'} color={'green.800'}>
               {reservation.data ? reservation.data.bookedCode : ''}
            </NvText>
         </Box>
         <Image
            source={
               detail.image
                  ? {
                       uri: detail.image.replace(
                          'http://localhost:5000',
                          BACKEND_URL,
                       ),
                    }
                  : ImgVehicle
            }
            alt="vehicle"
            width={'100%'}
            height={201}
            borderRadius={10}
            resizeMode={'contain'}
         />
         <VStack space={2} my={4}>
            <NvText fontWeight={16}>
               {reservation.quantity} {detail.name}
            </NvText>
            <NvText fontWeight={16}>{reservation.data.payment}</NvText>
            <NvText fontWeight={16}>4 days</NvText>
            <NvText fontWeight={16}>
               {reservation.startDate} to {reservation.endDate}
            </NvText>
         </VStack>
         <Divider my={2} height={0.5} />
         <VStack space={2} my={4}>
            <NvText>ID: {reservation.data.id}</NvText>
            <NvText>
               {reservation.data.name} {reservation.data.lastName} (
               {reservation.data.email}){' '}
            </NvText>
            <NvText>
               {reservation.data.contact} (
               <NvText fontWeight={'bold'} color={'green.800'}>
                  active
               </NvText>
               )
            </NvText>
            <NvText>Jakarta, Indonesia</NvText>
         </VStack>

         <Button
            height={60}
            bg={'rgba(255, 205, 97, 1)'}
            borderRadius={10}
            marginY={2}
            onPress={onPayment}>
            <NvText
               color={'rgba(57, 57, 57, 1)'}
               fontWeight={'bold'}
               fontSize={18}>
               Get Payment Code
            </NvText>
         </Button>
      </Container>
   );
};

export default OrderDetail;
