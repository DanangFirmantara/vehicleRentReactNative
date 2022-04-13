/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Container from '../components/Container';
import {
   Image,
   Input,
   HStack,
   Text,
   FlatList,
   Box,
   ScrollView,
   Button,
} from 'native-base';
import imgHeader from '../assets/image/home.png';
import ButtonForm from '../components/ButtonForm';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actions/user';
import { getCategory } from '../redux/actions/category';

const HomeAdmin = () => {
   const dispatch = useDispatch();
   const auth = useSelector((state) => state.auth);
   const user = useSelector((state) => state.user);
   const category = useSelector((state) => state.category);
   const dataUser = user.data;
   useEffect(() => {
      if (user.data.length === 0) {
         dispatch(getProfile(auth.token));
      }
      if (category.data.length !== 0) {
         category.data.map((item) => {
            console.log(item.id);
         });
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
         <ScrollView showsVerticalScrollIndicator={false}>
            <Image
               source={imgHeader}
               width={'100%'}
               alt="imgHeader"
               height={267}
            />
            <Container>
               <HStack space={5} marginTop={3}>
                  <Input placeholder={'Select Location'} flex={1} />
                  <Input placeholder={'Car'} width={100} />
               </HStack>
               {/* <ButtonForm>Search Vehicle</ButtonForm> */}
               <Button
                  height={50}
                  bg={'pallet.1'}
                  borderRadius={10}
                  marginY={2}
                  alignItems={'center'}
                  colorScheme={'pallet.3'}>
                  <Text
                     color={'pallet.2'}
                     fontWeight={'bold'}
                     fontSize={18}
                     alignItems={'center'}>
                     Login
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
               {category.data.length > 0 &&
                  category.data.map((item) => {
                     return (
                        <HStack key={item.id}>
                           <Text flex={1} fontWeight="bold">
                              {item.name}
                           </Text>
                           <Text underline={'true'} fontWeight="bold">
                              View More
                           </Text>
                        </HStack>
                     );
                  })}
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
               {dataUser.role === 'admin' && (
                  <ButtonForm
                     color="rgba(57, 57, 57, 1)"
                     textColor="rgba(255, 205, 97, 1)"
                     to={'AddNewItem'}>
                     Add new item
                  </ButtonForm>
               )}
            </Container>
         </ScrollView>
      </>
   );
};

export default HomeAdmin;
