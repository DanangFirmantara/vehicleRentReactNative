import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import imgBackground from '../assets/image/reset-password.png';
import {
   Alert,
   Button,
   HStack,
   Input,
   Spinner,
   Text as NvText,
   VStack,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {doSendCode} from '../redux/actions/auth';
import {useNavigation} from '@react-navigation/native';

const SendCode = () => {
   const [email, setEmail] = useState();
   const [err, setErr] = useState();

   const navigation = useNavigation();
   const dispatch = useDispatch();
   const auth = useSelector(state => state.auth);
   const onSendCode = () => {
      if (!email.includes('@')) {
         setErr('email must be include @');
      } else {
         setErr(null);
         dispatch(doSendCode(email));
      }
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
                     onChangeText={text => setEmail(text)}
                  />
               </View>
            </VStack>
            <Button
               height={50}
               bg={'rgba(255, 205, 97, 1)'}
               borderRadius={10}
               marginY={2}
               onPress={onSendCode}>
               <NvText
                  color={'rgba(57, 57, 57, 1)'}
                  fontWeight={'bold'}
                  fontSize={18}>
                  {auth.isLoading ? (
                     <Spinner
                        accessibilityLabel="Loading posts"
                        color="rgba(57, 57, 57, 1)"
                        size="lg"
                     />
                  ) : (
                     'Send Code'
                  )}
               </NvText>
            </Button>
            <Button
               height={50}
               bg={'white'}
               borderRadius={10}
               marginY={2}
               onPress={() => navigation.navigate('ResetPassword')}
               alignItems={'center'}>
               <NvText
                  color={'rgba(57, 57, 57, 1)'}
                  fontWeight={'bold'}
                  fontSize={18}
                  alignItems={'center'}>
                  Reset Password
               </NvText>
            </Button>
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

export default SendCode;
