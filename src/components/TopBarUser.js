/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import imgProfile from '../assets/image/profile.png';
import { HStack, Image, Text } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actions/user';
const TopBarUser = () => {
   const dispatch = useDispatch();
   const auth = useSelector((state) => state.auth);
   const user = useSelector((state) => state.user);
   const data = user.data;
   useEffect(() => {
      if (auth.token) {
         dispatch(getProfile(auth.token));
      }
   }, [dispatch]);
   return (
      <HStack alignItems={'center'} marginY={5}>
         <Image
            source={
               data.image
                  ? {
                       uri: data.image,
                    }
                  : imgProfile
            }
            alt="profile"
            size={70}
            resizeMode={'contain'}
            borderRadius={150}
         />
         <Text marginX={5} fontSize={22} fontWeight={'bold'}>
            {data.fullname ? data.fullname : data.username}
         </Text>
      </HStack>
   );
};

export default TopBarUser;
