/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import {
   Pressable,
   Box,
   Center,
   Input,
   Text,
   HStack,
   Button,
   Image,
   Select,
   CheckIcon,
   useToast,
   Alert,
   ScrollView,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from '../redux/actions/location';
import { getCategory } from '../redux/actions/category';
import { addVehicle } from '../redux/actions/vehicle';
import LoadingScreen from '../components/LoadingScreen';
import { clearMsg } from '../redux/actions/clearMsg';

const AddNewItem = () => {
   const [changed, setChanged] = useState({
      stock: 0,
      image: '',
      name: '',
      price: '',
      idLocation: 0,
      idCategory: 0,
      description: '',
   });
   const dispatch = useDispatch();
   const toast = useToast();

   const location = useSelector((state) => state.location);
   const category = useSelector((state) => state.category);
   const auth = useSelector((state) => state.auth);
   const vehicle = useSelector((state) => state.vehicle);
   useEffect(() => {
      console.log(location.data.length);
      console.log(category.data.length);
      if (location.data.length === 0) {
         dispatch(getLocation());
      }
      if (category.data.length === 0) {
         dispatch(getCategory());
      }
      return function cleanup() {
         dispatch(clearMsg());
      };
   }, [dispatch]);

   const onAdd = async () => {
      const file = await launchImageLibrary({});
      setChanged({ ...changed, image: file.assets[0] });
      // if (file.assets[0].fileSize <= 2097152) {

      // } else {
      //    toast.show({
      //       duration: 2,
      //       placement: 'top-right',
      //       render: () => {
      //          return (
      //             <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
      //                {'too large file. max 2 MB'}
      //             </Box>
      //          );
      //       },
      //    });
      // }
   };
   const onCamera = async () => {
      const file = await launchCamera({});
      setChanged({ ...changed, image: file.assets[0] });
   };
   const onSave = () => {
      let n = 6;
      console.log(changed.image);
      Object.keys(changed).forEach((item) => {
         if (changed[item] == 0 || changed[item] == '') {
            toast.show({
               duration: 2,
               placement: 'top-right',
               render: () => {
                  return (
                     <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                        {`${item} must be fill`}
                     </Box>
                  );
               },
            });
         } else {
            n--;
         }
      });
      if (n <= 0) {
         console.log(changed);
         dispatch(addVehicle(auth.token, changed));
      }
   };
   const onIncreament = () => {
      setChanged({ ...changed, stock: changed.stock + 1 });
   };

   const onDecreament = () => {
      if (changed.stock > 0) {
         setChanged({ ...changed, stock: changed.stock - 1 });
      }
   };
   return (
      <>
         {location.isLoading ||
         category.isLoading ||
         auth.isLoading ||
         vehicle.isLoading ? (
            <LoadingScreen />
         ) : (
            <>
               <ScrollView>
                  {vehicle.successMsg !== '' && (
                     <Alert status={'success'} mb={3}>
                        <HStack space={2} flexShrink={1} alignItems={'center'}>
                           <Alert.Icon mt="1" />
                           <Text fontSize="md" color="coolGray.800">
                              {vehicle.successMsg}
                           </Text>
                        </HStack>
                     </Alert>
                  )}
                  {vehicle.errorMsg !== '' && (
                     <Alert status={'error'}>
                        <HStack space={2} flexShrink={1} alignItems={'center'}>
                           <Alert.Icon mt="1" />
                           <Text fontSize="md" color="coolGray.800">
                              {vehicle.errorMsg}
                           </Text>
                        </HStack>
                     </Alert>
                  )}
                  <Container>
                     <Center mb={2}>
                        {changed.image === '' ? (
                           <Pressable onPress={onCamera}>
                              {({ isHovered, isFocused, isPressed }) => {
                                 return (
                                    <Box
                                       bg={
                                          isPressed
                                             ? 'coolGray.200'
                                             : isHovered
                                             ? 'coolGray.200'
                                             : 'rgba(186, 186, 186, 0.35)'
                                       }
                                       width={100}
                                       height={100}
                                       borderRadius={50}>
                                       <Center flex={1}>
                                          <Icon name="camera" size={50} />
                                       </Center>
                                    </Box>
                                 );
                              }}
                           </Pressable>
                        ) : (
                           <Image
                              width={100}
                              height={100}
                              borderRadius={50}
                              source={{ uri: changed.image.uri }}
                              alt={'addImg'}
                           />
                        )}
                     </Center>
                     <Box flex={1} />
                     <Button
                        height={50}
                        bg={'rgba(57, 57, 57, 1)'}
                        borderRadius={10}
                        marginY={2}
                        onPress={onAdd}
                        alignItems={'center'}>
                        <Text
                           color={'rgba(255, 205, 97, 1)'}
                           fontWeight={'bold'}
                           fontSize={18}
                           alignItems={'center'}>
                           Add Pictures
                        </Text>
                     </Button>
                     <Center>
                        <Input
                           placeholder="Type product name min 30 characters"
                           width={'75%'}
                           variant="underlined"
                           marginBottom={4}
                           textAlign="center"
                           onChangeText={(text) =>
                              setChanged({ ...changed, name: text })
                           }
                           borderBottomColor={'rgba(196, 196, 196, 1)'}
                        />
                        <Input
                           placeholder="Type product price"
                           width={'75%'}
                           variant="underlined"
                           marginBottom={4}
                           textAlign="center"
                           onChangeText={(text) =>
                              setChanged({ ...changed, price: text })
                           }
                           borderBottomColor={'rgba(196, 196, 196, 1)'}
                        />
                     </Center>
                     <Text fontWeight={'bold'} fontSize={17}>
                        Desription
                     </Text>
                     <Input
                        placeholder="Describe your product min 50 characters"
                        variant="underlined"
                        marginBottom={4}
                        onChangeText={(text) =>
                           setChanged({ ...changed, description: text })
                        }
                        borderBottomColor={'rgba(196, 196, 196, 1)'}
                     />
                     <Text fontWeight={'bold'} fontSize={17}>
                        Location
                     </Text>
                     <Box
                        variant="outline"
                        borderColor={'rgba(196, 196, 196, 1)'}
                        height={60}>
                        <Select
                           selectedValue={changed.location}
                           accessibilityLabel="Choose Service"
                           placeholder="Select Location"
                           fontSize={12}
                           _selectedItem={{
                              bg: 'rgba(255, 205, 97, 1)',
                              endIcon: (
                                 <CheckIcon
                                    size="5"
                                    color={'rgba(57, 57, 57, 1)'}
                                 />
                              ),
                           }}
                           mt={1}
                           onValueChange={(itemValue) =>
                              setChanged({ ...changed, idLocation: itemValue })
                           }>
                           {location.data.length !== 0 &&
                              location.data.map((item) => {
                                 return (
                                    <Select.Item
                                       key={item.id}
                                       label={item.name}
                                       value={item.id}
                                    />
                                 );
                              })}
                        </Select>
                     </Box>
                     <Text fontWeight={'bold'} fontSize={17}>
                        Add To
                     </Text>
                     <Box
                        variant="outline"
                        borderColor={'rgba(196, 196, 196, 1)'}
                        height={60}>
                        <Select
                           selectedValue={changed.category}
                           placeholder="Select Category"
                           fontSize={12}
                           _selectedItem={{
                              bg: 'rgba(255, 205, 97, 1)',
                              endIcon: (
                                 <CheckIcon
                                    size="5"
                                    color={'rgba(57, 57, 57, 1)'}
                                 />
                              ),
                           }}
                           mt={1}
                           onValueChange={(itemValue) =>
                              setChanged({ ...changed, idCategory: itemValue })
                           }>
                           {category.data.length !== 0 &&
                              category.data.map((item) => {
                                 return (
                                    <Select.Item
                                       key={item.id}
                                       label={item.name}
                                       value={item.id}
                                    />
                                 );
                              })}
                        </Select>
                     </Box>
                     <HStack
                        alignItems={'center'}
                        justifyContent="center"
                        my={2}>
                        <Text fontWeight={'bold'} fontSize={17} flex={1}>
                           Stock :
                        </Text>
                        {/* <Count /> */}
                        <Box
                           justifyContent={'flex-end'}
                           flexDirection="row"
                           alignItems={'center'}>
                           <Button
                              borderRadius={200}
                              bg="rgba(255, 205, 97, 0.54)"
                              onPress={onDecreament}>
                              <Text fontSize={17} fontWeight={'bold'}>
                                 -
                              </Text>
                           </Button>
                           <Text marginX={5} fontSize={17} fontWeight={'bold'}>
                              {changed.stock ? changed.stock : '0'}
                           </Text>
                           <Button
                              borderRadius={200}
                              bg="rgba(255, 205, 97, 1)"
                              onPress={onIncreament}>
                              <Text fontSize={17} fontWeight={'bold'}>
                                 +
                              </Text>
                           </Button>
                        </Box>
                     </HStack>
                     <Button
                        height={50}
                        bg={'rgba(255, 205, 97, 1)'}
                        borderRadius={10}
                        marginY={2}
                        onPress={onSave}
                        alignItems={'center'}>
                        <Text
                           color={'rgba(57, 57, 57, 1)'}
                           fontWeight={'bold'}
                           fontSize={18}
                           alignItems={'center'}>
                           Save product
                        </Text>
                     </Button>
                  </Container>
               </ScrollView>
            </>
         )}
      </>
   );
};

export default AddNewItem;
