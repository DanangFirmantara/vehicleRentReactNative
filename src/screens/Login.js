import {
   View,
   Text,
   ImageBackground,
   StyleSheet,
   TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import imgBackground from '../assets/image/login.png';
import ButtonForm from '../components/ButtonForm';
import {useNavigation} from '@react-navigation/native';
import {Box, Button, Input} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {doLogin} from '../redux/actions/auth';

const Login = () => {
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
   const [show, setShow] = useState(false);
   const navigation = useNavigation();
   const dispatch = useDispatch();

   const onLogin = () => {
      console.log(username, 'ini username');
      console.log(password, 'ini password');
      dispatch(doLogin(username, password));
   };
   const handleClick = () => setShow(!show);
   return (
      <View style={styles.container}>
         <ImageBackground
            source={imgBackground}
            resizeMode="cover"
            style={styles.image}>
            <View>
               <Text style={styles.textBar}>LET&lsquo;S EXPLORE THE WORLD</Text>
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
            <TouchableOpacity
               onPress={() => navigation.navigate('ResetPassword')}>
               <Text style={styles.textNavigate}>Forgot Password</Text>
            </TouchableOpacity>
            <Button
               height={50}
               bg={'rgba(255, 205, 97, 1)'}
               color={'rgba(57, 57, 57, 1)'}
               fontWeight="bold"
               fontSize={18}
               borderRadius={10}
               marginY={2}
               onPress={onLogin}>
               Login
            </Button>
            {/* <ButtonForm>Login</ButtonForm> */}
            <ButtonForm color="white" google>
               Sign Up With Google
            </ButtonForm>
            <View style={styles.content}>
               <Text style={styles.text}>Don’t have account?</Text>
               <TouchableOpacity
                  style={styles.textNavigate}
                  onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.textNavigate}>Sign up now</Text>
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
      flexDirection: 'row',
      justifyContent: 'center',
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

export default Login;
