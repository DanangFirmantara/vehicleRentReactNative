import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {useNavigation} from '@react-navigation/native';
import loginImg from '../assets/image/login.png';

const Login = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={loginImg} style={styles.imageBackground}>
      <Container>
        <View style={styles.contentTop}>
          <Text style={styles.text}>LET’S EXPLORE THE WORLD</Text>
        </View>
        <View style={styles.content}>
          <Text>Login</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Sign-Up');
            }}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Reset-Password');
            }}>
            <Text>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contentTop: {
    // paddingTop: 100,
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    width: '80%',
  },
  content: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
