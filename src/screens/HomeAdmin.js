/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import {
   Image,
   HStack,
   Text,
   FlatList,
   Box,
   ScrollView,
   Button,
   Select,
   CheckIcon,
} from 'native-base';
import imgHeader from '../assets/image/home.png';
import ButtonForm from '../components/ButtonForm';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actions/user';
import { getCategory } from '../redux/actions/category';
import { getVehicleCategory } from '../redux/actions/vehicle';
import defaultImg from '../assets/image/profile.png';
import { getLocation } from '../redux/actions/location';
import LoadingScreen from '../components/LoadingScreen';

const HomeAdmin = () => {
   const [changed, setChanged] = useState({});

   const dispatch = useDispatch();
   const auth = useSelector((state) => state.auth);
   const user = useSelector((state) => state.user);
   const category = useSelector((state) => state.category);
   const vehicle = useSelector((state) => state.vehicle);
   const location = useSelector((state) => state.location);
   const dataUser = user.data;
   useEffect(() => {
      if (!user.data.hasOwnProperty('role')) {
         dispatch(getProfile(auth.token));
      }
      console.log(user.data);
      if (location.data.length === 0) {
         dispatch(getLocation());
      }
      if (category.data.length !== 0) {
         if (vehicle.dataCategory.length === 0) {
            category.data.map(async (item) => {
               console.log(item.id);
               await dispatch(getVehicleCategory(item.id));
            });
         }
      } else {
         dispatch(getCategory());
      }
   }, [dispatch]);
   const data = [
      {
         alt: 'img1',
         img: imgHeader,
      },
      {
         alt: 'img2',
         img: imgHeader,
      },
      {
         alt: 'img3',
         img: imgHeader,
      },
   ];
   return (
      <>
         {category.isLoading || vehicle.isLoading || location.isLoading ? (
            <LoadingScreen />
         ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
               <Image
                  source={imgHeader}
                  width={'100%'}
                  alt="imgHeader"
                  height={267}
               />
               <Container>
                  <HStack space={5} marginTop={3}>
                     <Box
                        variant="outline"
                        borderColor={'rgba(196, 196, 196, 1)'}
                        height={60}
                        flex={1}>
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
                     <Box
                        variant="outline"
                        borderColor={'rgba(196, 196, 196, 1)'}
                        height={60}
                        width={100}>
                        <Select
                           selectedValue={changed.category}
                           placeholder="Category"
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
                  </HStack>
                  {/* <ButtonForm>Search Vehicle</ButtonForm> */}
                  <Button
                     height={50}
                     bg={'rgba(204, 236, 25, 1)'}
                     borderRadius={10}
                     marginY={2}
                     alignItems={'center'}
                     colorScheme={'rgba(204, 236, 8, 1)'}>
                     <Text
                        color={'rgb(96, 54, 1)'}
                        fontWeight={'bold'}
                        fontSize={18}
                        alignItems={'center'}>
                        Search
                     </Text>
                  </Button>
                  <Box flex={1} />
                  <HStack>
                     <Text flex={1} fontWeight="bold">
                        Recommended
                     </Text>
                     <Text underline={'true'} fontWeight="bold">
                        View More
                     </Text>
                  </HStack>
                  <Box marginY={4} flex={1}>
                     <FlatList
                        horizontal={true}
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                           <Box>
                              <HStack justifyContent={'space-between'}>
                                 <Image
                                    source={item.img}
                                    alt={item.alt}
                                    width={265}
                                    minHeight={168}
                                    mr={15}
                                    borderRadius={15}
                                 />
                              </HStack>
                           </Box>
                        )}
                     />
                  </Box>
                  {category.data.length > 0 &&
                     category.data.map((temp) => {
                        return (
                           <Box key={temp.id}>
                              <HStack>
                                 <Text flex={1} fontWeight="bold">
                                    {temp.name}
                                 </Text>
                                 <Text underline={'true'} fontWeight="bold">
                                    View More
                                 </Text>
                              </HStack>
                              <Box marginY={4}>
                                 <FlatList
                                    horizontal={true}
                                    data={vehicle.dataCategory}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => {
                                       return (
                                          <Box>
                                             {temp.id === item.idCategory && (
                                                <>
                                                   <HStack
                                                      justifyContent={
                                                         'space-between'
                                                      }>
                                                      <Image
                                                         source={
                                                            item.image
                                                               ? {
                                                                    uri: item.image,
                                                                 }
                                                               : defaultImg
                                                         }
                                                         alt={String(item.id)}
                                                         width={265}
                                                         minHeight={168}
                                                         mr={15}
                                                         resizeMode={'contain'}
                                                         borderRadius={15}
                                                      />
                                                   </HStack>
                                                </>
                                             )}
                                          </Box>
                                       );
                                    }}
                                 />
                              </Box>
                           </Box>
                        );
                     })}

                  {dataUser.role === 'Admin' && (
                     <ButtonForm
                        color="rgba(57, 57, 57, 1)"
                        textColor="rgba(255, 205, 97, 1)"
                        to={'AddNewItem'}>
                        Add new item
                     </ButtonForm>
                  )}
               </Container>
            </ScrollView>
         )}
      </>
   );
};

export default HomeAdmin;
