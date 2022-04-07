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

const OrderDetail = () => {
   const navigation = useNavigation();
   const onPayment = () => {
      navigation.navigate('FinishPayment');
   };
   return (
      <Container>
         <Box justifyContent={'center'} alignItems={'center'} py={6}>
            <NvText fontSize={16}>Your booking code</NvText>
            <NvText fontSize={24} fontWeight={'bold'} color={'green.800'}>
               VSP09875
            </NvText>
         </Box>
         <Image
            source={ImgVehicle}
            alt="vehicle"
            width={'100%'}
            height={201}
            borderRadius={10}
         />
         <VStack space={2} my={4}>
            <NvText fontWeight={16}>2 Vespa</NvText>
            <NvText fontWeight={16}>Prepayment (no tax)</NvText>
            <NvText fontWeight={16}>4 days</NvText>
            <NvText fontWeight={16}>Jan 18 2021 to Jan 22 2021</NvText>
         </VStack>
         <Divider my={2} height={0.5} />
         <VStack space={2} my={4}>
            <NvText>ID: 90812391238</NvText>
            <NvText>Jessice Jane (jjane@mail.com) </NvText>
            <NvText>
               089123891239 (
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
