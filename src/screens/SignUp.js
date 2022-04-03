import {
   View,
   ImageBackground,
   StyleSheet,
   TouchableOpacity,
   Text,
} from 'react-native';
import React, {useState} from 'react';
import imgBackground from '../assets/image/sign-up.png';
import {useNavigation} from '@react-navigation/native';
import {Box, Button, Input, Text as NvText} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import ButtonForm from '../components/ButtonForm';

const SignUp = () => {
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
   const [contact, setContact] = useState();
   const [email, setEmail] = useState();
   const [show, setShow] = useState(false);
   const handleClick = () => setShow(!show);
   const navigation = useNavigation();

   const onSignup = () => {
      console.log(username, password, contact, email);
   };

   return (
      <View style={styles.container}>
         <ImageBackground
            source={imgBackground}
            resizeMode="cover"
            style={styles.image}>
            <View>
               <Text style={styles.textBar}>LET&lsquo;S HAVE SOME RIDE</Text>
            </View>
            <View style={styles.gap} />
            <View>
               <Input
                  bg="rgba(223, 222, 222, 0.5)"
                  color="white"
                  variant="filled"
                  paddingLeft={5}
                  fontSize={12}
                  fontWeight="bold"
                  placeholder={'Username'}
                  placeholderTextColor="white"
                  onChangeText={text => setUsername(text)}
               />
            </View>
            <View>
               <Input
                  bg="rgba(223, 222, 222, 0.5)"
                  color="white"
                  variant="filled"
                  paddingLeft={5}
                  fontSize={12}
                  fontWeight="bold"
                  placeholder={'Contact'}
                  placeholderTextColor="white"
                  onChangeText={text => setContact(text)}
               />
            </View>
            <View>
               <Input
                  bg="rgba(223, 222, 222, 0.5)"
                  color="white"
                  variant="filled"
                  paddingLeft={5}
                  fontSize={12}
                  fontWeight="bold"
                  placeholder={'Email'}
                  placeholderTextColor="white"
                  onChangeText={text => setEmail(text)}
               />
            </View>
            <View>
               <Input
                  bg="rgba(223, 222, 222, 0.5)"
                  color="white"
                  variant="filled"
                  paddingLeft={5}
                  fontSize={12}
                  fontWeight="bold"
                  marginY={2}
                  placeholder={'Password'}
                  placeholderTextColor="white"
                  onChangeText={text => setPassword(text)}
                  type={show ? 'text' : 'password'}
                  InputRightElement={
                     <Box marginRight={4}>
                        <EntypoIcon
                           onPress={handleClick}
                           name={show ? 'eye' : 'eye-with-line'}
                           size={20}
                           color="rgba(57, 57, 57, 1)"
                        />
                     </Box>
                  }
               />
            </View>
            <Button
               height={50}
               bg={'rgba(255, 205, 97, 1)'}
               borderRadius={10}
               marginY={2}
               onPress={onSignup}>
               <NvText
                  color={'rgba(57, 57, 57, 1)'}
                  fontWeight={'bold'}
                  fontSize={18}>
                  Sign Up
               </NvText>
            </Button>
            <ButtonForm color="white" google>
               Sign Up With Google
            </ButtonForm>
            <View style={styles.content}>
               <Text style={styles.text}>Already have an account?</Text>
               <TouchableOpacity
                  style={styles.textNavigate}
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.textNavigate}>Login now</Text>
               </TouchableOpacity>
            </View>
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
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
      width: '90%',
   },
   text: {
      color: 'white',
      textAlign: 'center',
   },
   textNavigate: {
      marginHorizontal: 3,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
   },
   content: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
   gap: {
      flex: 1,
   },
});

export default SignUp;
