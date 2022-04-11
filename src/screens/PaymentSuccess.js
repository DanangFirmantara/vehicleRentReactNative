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
import { useSelector } from 'react-redux';

const PaymentSuccess = () => {
   const navigation = useNavigation();
   const payment = useSelector((state) => state.payment);
   const vehicle = useSelector((state) => state.vehicle);
   const reservation = useSelector((state) => state.reservation);

   const diffInMs =
      new Date(payment.data?.rentEndDate) -
      new Date(payment.data?.rentStartDate);
   const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

   const onPayment = () => {
      navigation.navigate('FinishPayment');
   };
   return (
      <Container>
         <Box justifyContent={'center'} alignItems={'center'} py={4} pb={6}>
            <NvText fontSize={24} fontWeight={'bold'} color={'green.800'}>
               {payment.successMsg}
            </NvText>
         </Box>
         <Image
            source={ImgVehicle}
            alt="vehicle"
            width={'100%'}
            height={201}
            borderRadius={10}
         />
         <Box flex={1} />
         <VStack space={2} my={4}>
            <NvText fontWeight={16}>
               {payment.data?.quantity} {vehicle.detail?.name}
            </NvText>
            <NvText fontWeight={16}>{reservation.data?.payment}</NvText>
            <NvText fontWeight={16}>{diffInDays} days</NvText>
            <NvText fontWeight={16}>
               {payment.data?.rentStartDate} to {payment.data?.rentEndDate}
            </NvText>
         </VStack>
         <Divider my={2} height={0.5} />
         <VStack space={2} my={4}>
            <NvText>ID: {reservation.data?.id}</NvText>
            <NvText>
               {reservation.data?.name} {reservation.data?.lastName} (
               {reservation.data?.email}){' '}
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
               Total : {payment.data?.total}
            </NvText>
         </Button>
      </Container>
   );
};

export default PaymentSuccess;
