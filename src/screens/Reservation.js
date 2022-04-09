import { View } from 'react-native';
import React, { useState } from 'react';
import Container from '../components/Container';
import {
   Button,
   Input,
   VStack,
   Text as NvText,
   Box,
   Select,
   CheckIcon,
} from 'native-base';
import Stepper from '../components/Stepper';
import { useNavigation } from '@react-navigation/native';

const Reservation = () => {
   const [idCard, setIdCard] = useState();
   const [name, SetName] = useState();
   const [lastName, setLastName] = useState();
   const [contact, setContact] = useState();
   const [email, setEmail] = useState();
   const [service, setService] = useState();
   const navigation = useNavigation();

   const onOrder = () => {
      console.log(idCard, name, lastName, contact, email);
      navigation.navigate('OrderDetail');
   };

   return (
      <Container>
         <Box flex={1} alignItems={'center'} justifyContent={'center'}>
            <Stepper currentlyActive={1} count={3} weight={40} />
         </Box>
         <VStack space={4} my={6}>
            <View>
               <Input
                  bg="rgba(223, 222, 222, 0.5)"
                  color="rgba(57, 57, 57, 1)"
                  variant="filled"
                  height={60}
                  paddingLeft={5}
                  fontSize={12}
                  fontWeight="bold"
                  placeholder={'ID Card Number'}
                  placeholderTextColor="rgba(57, 57, 57, 1)"
                  onChangeText={(text) => setIdCard(text)}
               />
            </View>
            <View>
               <Input
                  bg="rgba(223, 222, 222, 0.5)"
                  color="rgba(57, 57, 57, 1)"
                  variant="filled"
                  paddingLeft={5}
                  height={60}
                  fontSize={12}
                  fontWeight="bold"
                  placeholder={'Name'}
                  placeholderTextColor="rgba(57, 57, 57, 1)"
                  onChangeText={(text) => SetName(text)}
               />
            </View>
            <View>
               <Input
                  bg="rgba(223, 222, 222, 0.5)"
                  color="rgba(57, 57, 57, 1)"
                  variant="filled"
                  paddingLeft={5}
                  height={60}
                  fontSize={12}
                  fontWeight="bold"
                  placeholder={'Last Name'}
                  placeholderTextColor="rgba(57, 57, 57, 1)"
                  onChangeText={(text) => setLastName(text)}
               />
            </View>
            <View>
               <Input
                  bg="rgba(223, 222, 222, 0.5)"
                  color="rgba(57, 57, 57, 1)"
                  variant="filled"
                  paddingLeft={5}
                  height={60}
                  fontSize={12}
                  fontWeight="bold"
                  placeholder={'Mobile phone(must be active)'}
                  placeholderTextColor="rgba(57, 57, 57, 1)"
                  onChangeText={(text) => setContact(text)}
               />
            </View>
            <View>
               <Input
                  bg="rgba(223, 222, 222, 0.5)"
                  color="rgba(57, 57, 57, 1)"
                  variant="filled"
                  paddingLeft={5}
                  height={60}
                  fontSize={12}
                  fontWeight="bold"
                  placeholder={'Enter your email address'}
                  placeholderTextColor="rgba(57, 57, 57, 1)"
                  onChangeText={(text) => setEmail(text)}
               />
            </View>
            <View>
               <Box
                  bg="rgba(223, 222, 222, 0.5)"
                  color="rgba(57, 57, 57, 0.8)"
                  variant="filled"
                  px={2}
                  placeholder={'1 Day'}
                  height={60}>
                  <Select
                     selectedValue={service}
                     accessibilityLabel="Choose Service"
                     placeholder="Payment Type"
                     placeholderTextColor="rgba(57, 57, 57, 1)"
                     fontSize={12}
                     fontWeight="bold"
                     _selectedItem={{
                        bg: 'rgba(255, 205, 97, 1)',
                        endIcon: (
                           <CheckIcon size="5" color={'rgba(57, 57, 57, 1)'} />
                        ),
                     }}
                     mt={1}
                     onValueChange={(itemValue) => setService(itemValue)}>
                     <Select.Item label="Prepayment (not tax)" value={1} />
                     <Select.Item
                        label="Pay at the end (include tax)"
                        value={2}
                     />
                     <Select.Item
                        label="Partial payment (include tax)"
                        value={3}
                     />
                  </Select>
               </Box>
            </View>
         </VStack>
         <Button
            height={60}
            bg={'rgba(255, 205, 97, 1)'}
            borderRadius={10}
            marginY={2}
            onPress={onOrder}>
            <NvText
               color={'rgba(57, 57, 57, 1)'}
               fontWeight={'bold'}
               fontSize={18}>
               See Order Details
            </NvText>
         </Button>
      </Container>
   );
};

export default Reservation;
