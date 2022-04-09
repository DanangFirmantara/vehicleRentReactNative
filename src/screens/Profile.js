import { Box, Button, FlatList, HStack, Pressable, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';
import { useDispatch } from 'react-redux';
import Container from '../components/Container';
import TopBarUser from '../components/TopBarUser';
import { doLogout } from '../redux/actions/auth';
import { useNavigation } from '@react-navigation/native';
import { vehicleReset } from '../redux/actions/vehicle';
import PushNotification from 'react-native-push-notification';
import { reservationClear } from '../redux/actions/reservation';

const Profile = () => {
   const dispatch = useDispatch();
   const onLogout = () => {
      dispatch(doLogout());
   };
   const onResetVehicle = () => {
      dispatch(vehicleReset());
   };
   const onResetReservation = () => {
      dispatch(reservationClear());
   };
   const data = [
      {
         menu: 'Your Favorite',
         to: 'YourFavorite',
      },
      {
         menu: 'FAQ',
         to: 'FAQ',
      },
      {
         menu: 'Help',
         to: 'Help',
      },
      {
         menu: 'Update Profile',
         to: 'UpdateProfile',
      },
   ];
   const navigation = useNavigation();
   const localNotif = () => {
      PushNotification.localNotification({
         channelId: 'profile-notif',
         title: 'profile-notif',
         message: 'Tes Notif',
         playSound: true,
      });
   };
   return (
      <Container>
         <TopBarUser />
         <FlatList
            data={data}
            renderItem={({ item }) => {
               return (
                  <Pressable onPress={() => navigation.navigate(item.to)}>
                     {({ isHovered, isFocused, isPressed }) => {
                        return (
                           <Box
                              py="2"
                              px="2"
                              bg={
                                 isPressed
                                    ? 'coolGray.200'
                                    : isHovered
                                    ? 'coolGray.200'
                                    : 'transparent'
                              }>
                              <HStack alignItems={'center'}>
                                 <Text fontSize={18} fontWeight={600} flex={1}>
                                    {item.menu}
                                 </Text>
                                 <Icon name="chevron-right" size={30} />
                              </HStack>
                           </Box>
                        );
                     }}
                  </Pressable>
               );
            }}
         />
         <Box flex={1} />
         <Pressable onPress={localNotif}>
            {({ isHovered, isFocused, isPressed }) => {
               return (
                  <Box
                     py="2"
                     px="2"
                     bg={
                        isPressed
                           ? 'coolGray.200'
                           : isHovered
                           ? 'coolGray.200'
                           : 'transparent'
                     }>
                     <HStack alignItems={'center'}>
                        <Text fontSize={18} fontWeight={600} flex={1}>
                           Test notif
                        </Text>
                        <Icon name="chevron-right" size={30} />
                     </HStack>
                  </Box>
               );
            }}
         </Pressable>
         <Button
            height={50}
            bg={'rgba(255, 205, 97, 1)'}
            color={'rgba(57, 57, 57, 1)'}
            fontWeight="bold"
            fontSize={18}
            borderRadius={10}
            marginY={2}
            onPress={onResetReservation}>
            <Text fontSize={17} fontWeight={'bold'}>
               Reset Reservation
            </Text>
         </Button>
         <Button
            height={50}
            bg={'rgba(255, 205, 97, 1)'}
            color={'rgba(57, 57, 57, 1)'}
            fontWeight="bold"
            fontSize={18}
            borderRadius={10}
            marginY={2}
            onPress={onResetVehicle}>
            <Text fontSize={17} fontWeight={'bold'}>
               Reset Vehicle
            </Text>
         </Button>
         <Button
            height={50}
            bg={'rgba(255, 205, 97, 1)'}
            color={'rgba(57, 57, 57, 1)'}
            fontWeight="bold"
            fontSize={18}
            borderRadius={10}
            marginY={2}
            onPress={onLogout}>
            <Text fontSize={17} fontWeight={'bold'}>
               Logout
            </Text>
         </Button>
      </Container>
   );
};

export default Profile;
