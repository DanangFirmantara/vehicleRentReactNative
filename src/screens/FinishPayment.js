import Clipboard from '@react-native-clipboard/clipboard';
import Container from '../components/Container';
import React from 'react';
import {
   Box,
   VStack,
   Text,
   Divider,
   Button,
   Center,
   ScrollView,
} from 'native-base';
import Stepper from '../components/Stepper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { finishPayment } from '../redux/actions/payment';

const FinishPayment = () => {
   const navigation = useNavigation();
   const payment = useSelector((state) => state.payment);
   const reservation = useSelector((state) => state.reservation);
   const vehicle = useSelector((state) => state.vehicle);
   const auth = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const onFinishPayment = () => {
      dispatch(
         finishPayment(
            payment.data.id,
            payment.data.total,
            payment.data.codePayment,
            auth.token,
         ),
      );
      navigation.replace('PaymentSuccess');
   };
   const copyToClipboard = () => {
      Clipboard.setString(
         payment.data.codePayment + reservation.data.bookedCode,
      );
   };
   return (
      <Container>
         <ScrollView showsVerticalScrollIndicator={false}>
            <Box safeArea mt={15}>
               <Box alignItems={'center'} justifyContent={'center'} mb={2}>
                  <Stepper currentlyActive={3} count={3} weight={40} />
               </Box>
               <VStack space={1} alignItems={'center'}>
                  <Text fontWeight={'bold'} fontSize={18}>
                     Payment Code
                  </Text>
                  <Text fontWeight={'bold'} fontSize={36}>
                     {payment.data?.codePayment}
                  </Text>
                  <Text
                     fontSize={13}
                     color={'rgba(97, 97, 103, 1)'}
                     alignItems={'center'}>
                     Insert your payment code while you transfer booking order
                  </Text>
                  <Text
                     fontSize={13}
                     color={'rgba(97, 97, 103, 1)'}
                     alignItems={'center'}>
                     Pay before :
                  </Text>
                  <Text
                     color={'rgba(155, 10, 10, 1)'}
                     fontWeight={'bold'}
                     fontSize={24}>
                     1:59:34
                  </Text>
                  <Text fontSize={16} color={'rgba(97, 97, 103, 1)'}>
                     Back account information
                  </Text>
                  <Text fontSize={24} fontWeight={'bold'}>
                     0290-90203-345-2
                  </Text>
                  <Text color={'rgba(97, 97, 103, 1)'} fontSize={16}>
                     Vespa Rental Jogja
                  </Text>
               </VStack>
               <Divider height={0.5} my={4} />
               <Center>
                  <VStack
                     width={'75%'}
                     justifyContent={'center'}
                     alignItems={'center'}>
                     <Text fontWeight={'bold'} fontSize={16}>
                        Booking code :{' '}
                        <Text color={'green.800'}>
                           {reservation.data.bookedCode}
                        </Text>
                     </Text>
                     <Text color={'rgba(97, 97, 103, 1)'} fontSize={13}>
                        Use booking code to pick up your {vehicle.detail.name}
                     </Text>

                     <Button
                        height={42}
                        bg={'rgba(204, 236, 25, 1)'}
                        colorScheme={'rgba(204, 236, 8, 1)'}
                        borderRadius={10}
                        width={'100%'}
                        marginY={2}
                        onPress={copyToClipboard}>
                        <Text
                           color={'rgb(96, 54, 1)'}
                           fontWeight={'bold'}
                           fontSize={12}>
                           Copy Payment & Booking Code
                        </Text>
                     </Button>
                  </VStack>
               </Center>
               <VStack>
                  <Text fontSize={16}>Order details :</Text>
                  <Text fontSize={16}>
                     {payment.data.quantity} {vehicle.detail.name}
                  </Text>
                  <Text fontSize={16}>{reservation.data.payment}</Text>
                  <Text fontSize={16}>4 days</Text>
                  <Text fontSize={16}>
                     {payment.data?.rentStartDate} to{' '}
                     {payment.data?.rentEndDate}
                  </Text>
               </VStack>
               <Divider height={0.5} my={4} />
               <Box flexDirection={'row'} alignItems={'center'}>
                  <Text flex={1} fontSize={36} fontWeight={'bold'}>
                     Rp. {payment.data?.total}
                  </Text>
                  <Box mr={3}>
                     <Icon
                        name="info-circle"
                        size={36}
                        color={'rgba(223, 222, 222, 1)'}
                     />
                  </Box>
               </Box>
               <Button
                  height={60}
                  bg={'rgba(204, 236, 25, 1)'}
                  colorScheme={'rgba(204, 236, 8, 1)'}
                  borderRadius={10}
                  marginY={2}
                  onPress={onFinishPayment}>
                  <Text
                     color={'rgb(96, 54, 1)'}
                     fontWeight={'bold'}
                     fontSize={18}>
                     Finish Payment
                  </Text>
               </Button>
            </Box>
         </ScrollView>
      </Container>
   );
};

export default FinishPayment;
