import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import imgBackground from '../assets/image/reset-password.png';
import {
   Alert,
   Button,
   HStack,
   Input,
   Spinner,
   Text as NvText,
   VStack,
   Box,
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { clearMsg, doResetPassword } from '../redux/actions/auth';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const ResetPassword = () => {
   const [email, setEmail] = useState();
   const [err, setErr] = useState();
   const [code, setCode] = useState();
   const [password, setPassword] = useState();
   const [confirmPassword, setConfirmPassword] = useState();
   const [show1, setShow1] = useState(false);
   const [show2, setShow2] = useState(false);
   const handleClick1 = () => setShow1(!show1);
   const handleClick2 = () => setShow2(!show2);

   const navigation = useNavigation();
   const dispatch = useDispatch();
   const auth = useSelector((state) => state.auth);

   useEffect(() => {
      dispatch(clearMsg());
   }, [dispatch]);

   const onResetPassword = () => {
      dispatch(clearMsg());
      if (!confirmPassword || !password || !code || !email) {
         setErr('username, password, contact, and email mandatory!');
      } else if (password.length < 6) {
         setErr('Password length minimal 6 character');
      } else if (confirmPassword.length < 6) {
         setErr('Confirm Password length minimal 6 character');
      } else if (!parseFloat(code)) {
         setErr('Contact must be a number');
      } else if (!email.includes('@')) {
         setErr('email must be include @');
      } else {
         setErr(null);
         console.log(email, code, confirmPassword, password);
         dispatch(doResetPassword(email, code, confirmPassword, password));
      }
      console.log(email, password, confirmPassword, code);
   };
   return (
      <View style={styles.container}>
         <ImageBackground
            source={imgBackground}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.textBar}>
               <Text style={styles.textBar}>
                  THAT&lsquo;S OKAY, WE GOT YOUR BACK
               </Text>
            </View>
            <View style={styles.gap} />
            {auth.successMsg !== '' && (
               <Alert status={'success'}>
                  <HStack space={2} flexShrink={1} alignItems={'center'}>
                     <Alert.Icon mt="1" />
                     <Text fontSize="md" color="coolGray.800">
                        {auth.successMsg}
                     </Text>
                  </HStack>
               </Alert>
            )}
            {auth.isError && (
               <Alert status={'error'}>
                  <HStack space={2} flexShrink={1} alignItems={'center'}>
                     <Alert.Icon mt="1" />
                     <Text fontSize="md" color="coolGray.800">
                        {auth.errorMsg}
                     </Text>
                  </HStack>
               </Alert>
            )}
            {err && (
               <Alert status={'error'}>
                  <HStack space={2} flexShrink={1} alignItems={'center'}>
                     <Alert.Icon mt="1" />
                     <Text fontSize="md" color="coolGray.800">
                        {String(err)}
                     </Text>
                  </HStack>
               </Alert>
            )}
            <Text style={styles.text}>
               Enter your email to get reset password code
            </Text>
            <VStack space={2}>
               <View>
                  <Input
                     bg="rgba(223, 222, 222, 0.5)"
                     color="rgba(57, 57, 57, 1)"
                     variant="filled"
                     paddingLeft={5}
                     fontSize={12}
                     fontWeight="bold"
                     placeholder={'Enter your email address'}
                     placeholderTextColor="rgba(57, 57, 57, 1)"
                     onChangeText={(text) => setEmail(text)}
                  />
               </View>
               <View>
                  <Input
                     bg="rgba(223, 222, 222, 0.5)"
                     color="rgba(57, 57, 57, 1)"
                     variant="filled"
                     paddingLeft={5}
                     fontSize={12}
                     fontWeight="bold"
                     placeholder={'Code'}
                     placeholderTextColor="rgba(57, 57, 57, 1)"
                     onChangeText={(text) => setCode(text)}
                  />
               </View>
               <View>
                  <Input
                     bg="rgba(223, 222, 222, 0.5)"
                     color="rgba(57, 57, 57, 1)"
                     variant="filled"
                     paddingLeft={5}
                     fontSize={12}
                     fontWeight="bold"
                     placeholder={'Password'}
                     placeholderTextColor="rgba(57, 57, 57, 1)"
                     type={show1 ? 'text' : 'password'}
                     onChangeText={(text) => setPassword(text)}
                     InputRightElement={
                        <Box marginRight={4}>
                           <EntypoIcon
                              onPress={handleClick1}
                              name={show1 ? 'eye' : 'eye-with-line'}
                              size={20}
                              color="rgba(57, 57, 57, 1)"
                           />
                        </Box>
                     }
                  />
               </View>
               <View>
                  <Input
                     bg="rgba(223, 222, 222, 0.5)"
                     color="rgba(57, 57, 57, 1)"
                     variant="filled"
                     paddingLeft={5}
                     fontSize={12}
                     fontWeight="bold"
                     placeholder={'Confirm Password'}
                     placeholderTextColor="rgba(57, 57, 57, 1)"
                     type={show2 ? 'text' : 'password'}
                     onChangeText={(text) => setConfirmPassword(text)}
                     InputRightElement={
                        <Box marginRight={4}>
                           <EntypoIcon
                              onPress={handleClick2}
                              name={show2 ? 'eye' : 'eye-with-line'}
                              size={20}
                              color="rgba(57, 57, 57, 1)"
                           />
                        </Box>
                     }
                  />
               </View>
            </VStack>
            <Button
               height={50}
               bg={'rgba(204, 236, 25, 1)'}
               borderRadius={10}
               marginY={2}
               onPress={onResetPassword}>
               <NvText
                  color={'rgb(96, 54, 1)'}
                  fontWeight={'bold'}
                  fontSize={18}>
                  {auth.isLoading ? (
                     <Spinner
                        accessibilityLabel="Loading posts"
                        color="color={'rgb(96, 54, 1)'}"
                        size="lg"
                     />
                  ) : (
                     'Reset Password'
                  )}
               </NvText>
            </Button>
            <HStack justifyContent={'center'} space={2}>
               <NvText color="white">Already have an account?</NvText>
               <Pressable onPress={() => navigation.navigate('Login')}>
                  <NvText color="white" fontWeight={'bold'}>
                     Login now
                  </NvText>
               </Pressable>
            </HStack>
         </ImageBackground>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   image: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 20,
   },
   textBar: {
      marginVertical: 40,
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
   },
   text: {
      color: 'white',
      marginVertical: 2,
   },
   gap: {
      flex: 1,
   },
});

export default ResetPassword;
