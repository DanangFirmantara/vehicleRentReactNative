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
} from 'native-base';
import React, {useState} from 'react';
import Container from '../components/Container';
import imgProfile from '../assets/image/profile.png';
const UpdateProfile = () => {
   const [gender, setGender] = useState('male');
   return (
      <Container>
         <Box my={5}>
            <HStack justifyContent={'center'} space={5} alignItems={'center'}>
               <Image
                  source={imgProfile}
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
                     borderRadius={10}>
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
                  value={gender}
                  onChange={nextValue => setGender(nextValue)}
                  defaultValue={gender}>
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
               borderBottomColor={'rgba(159, 159, 159, 1)'}
            />
            <Text
               color={'rgba(210, 210, 210, 1)'}
               fontSize={13}
               fontWeight={'bold'}>
               Date of Birth
            </Text>
            <Input
               placeholder={'Date of Birth'}
               type={'date'}
               variant="underlined"
               borderBottomColor={'rgba(159, 159, 159, 1)'}
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
            my={4}>
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
