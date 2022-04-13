import {
   Button,
   HStack,
   Image,
   VStack,
   Box,
   Text,
   Input,
   Center,
   Radio,
   Pressable,
} from 'native-base';
import React, { useState } from 'react';
import Container from '../components/Container';
import imgProfile from '../assets/image/profile.png';
import DatePicker from 'react-native-date-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { updateProfile } from '../redux/actions/user';

const UpdateProfile = () => {
   const [open, setOpen] = useState(false);
   const [date, setDate] = useState(new Date());
   const user = useSelector((state) => state.user);
   const [change, setChange] = useState({});
   const data = user.data;
   const auth = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   const fromGallery = async () => {
      const file = await launchImageLibrary({});
      setChange({ ...change, image: file.assets[0] });
      console.log(file.assets[0]);
   };
   const onUpdate = () => {
      console.log(change);
      dispatch(updateProfile(auth.token, change));
   };
   return (
      <Container>
         <Box my={5}>
            <HStack justifyContent={'center'} space={5} alignItems={'center'}>
               <Image
                  source={
                     change.image
                        ? { uri: change.image.uri }
                        : data.image
                        ? { uri: data.image }
                        : imgProfile
                  }
                  alt="profile"
                  size={100}
                  resizeMode={'contain'}
                  borderRadius={150}
               />
               <VStack space={3}>
                  <Button
                     height={50}
                     bg={'rgba(57, 57, 57, 1)'}
                     fontWeight="bold"
                     fontSize={18}
                     borderRadius={10}>
                     <Text
                        color={'rgba(255, 205, 97, 1)'}
                        fontSize={13}
                        fontWeight={'bold'}>
                        Take a picture
                     </Text>
                  </Button>
                  <Button
                     height={50}
                     bg={'rgba(255, 205, 97, 1)'}
                     fontWeight="bold"
                     fontSize={18}
                     borderRadius={10}
                     onPress={fromGallery}>
                     <Text
                        color={'rgba(57, 57, 57, 1)'}
                        fontSize={13}
                        fontWeight={'bold'}>
                        Browse from gallery
                     </Text>
                  </Button>
               </VStack>
            </HStack>
         </Box>
         <VStack space={2}>
            <Center>
               <Radio.Group
                  name="gender"
                  accessibilityLabel="gender"
                  defaultValue={data.gender === 'Male' ? 'male' : 'female'}
                  onChange={(nextValue) =>
                     setChange({ ...change, gender: nextValue })
                  }>
                  <HStack space={10}>
                     <Radio value="male">Male</Radio>
                     <Radio value="female">Female</Radio>
                  </HStack>
               </Radio.Group>
            </Center>
            <Text
               color={'rgba(210, 210, 210, 1)'}
               fontSize={13}
               fontWeight={'bold'}>
               Name
            </Text>
            <Input
               placeholder={'Name'}
               variant="underlined"
               defaultValue={data.fullName}
               onChangeText={(text) => {
                  console.log(text);
                  setChange({ ...change, fullName: text });
               }}
               borderBottomColor={'rgba(159, 159, 159, 1)'}
            />
            <Text
               color={'rgba(210, 210, 210, 1)'}
               fontSize={13}
               fontWeight={'bold'}>
               Email Address
            </Text>
            <Input
               placeholder={'Email'}
               variant="underlined"
               defaultValue={data.email}
               onChangeText={(text) => setChange({ ...change, email: text })}
               borderBottomColor={'rgba(159, 159, 159, 1)'}
            />
            <Text
               color={'rgba(210, 210, 210, 1)'}
               fontSize={13}
               fontWeight={'bold'}>
               Phone Number
            </Text>
            <Input
               placeholder={'Phone Number'}
               variant="underlined"
               defaultValue={data.contact}
               onChangeText={(text) => setChange({ ...change, contact: text })}
               borderBottomColor={'rgba(159, 159, 159, 1)'}
            />
            <Text
               color={'rgba(210, 210, 210, 1)'}
               fontSize={13}
               fontWeight={'bold'}>
               Date of Birth
            </Text>
            <Pressable onPress={() => setOpen(true)}>
               <Box
                  variant="underlined"
                  borderBottomColor={'rgba(159, 159, 159, 1)'}
                  py={2}
                  borderBottomWidth={1}>
                  <HStack>
                     <Text flex={1}>
                        {change.birthDate
                           ? change.birthDate
                           : moment(data.birthDate).format('YYYY-MM-DD')}
                     </Text>
                     <MaterialIcon name={'date-range'} size={20} mx={4} />
                  </HStack>
               </Box>
            </Pressable>
            <DatePicker
               modal
               mode="date"
               date={date}
               open={open}
               onCancel={() => setOpen(false)}
               maximumDate={new Date()}
               onConfirm={(dateItem) => {
                  setOpen(false);
                  setDate(dateItem);
                  setChange({
                     ...change,
                     birthDate: moment(dateItem).format('YYYY-MM-DD'),
                  });
               }}
            />
            <Text
               color={'rgba(210, 210, 210, 1)'}
               fontSize={13}
               fontWeight={'bold'}>
               Delivery Address
            </Text>
            <Input
               placeholder={'Delivery address'}
               variant="underlined"
               defaultValue={data.address}
               onChangeText={(text) => setChange({ ...change, address: text })}
               borderBottomColor={'rgba(159, 159, 159, 1)'}
            />
         </VStack>
         <Box flex={1} />
         <Button
            height={50}
            bg={'rgba(255, 205, 97, 1)'}
            fontWeight="bold"
            fontSize={18}
            borderRadius={10}
            my={4}
            onPress={onUpdate}>
            <Text
               color={'rgba(57, 57, 57, 1)'}
               fontSize={17}
               fontWeight={'bold'}>
               Save Change
            </Text>
         </Button>
      </Container>
   );
};

export default UpdateProfile;
