import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import imgBackground from '../assets/image/login.png';
import Input from '../components/Input';
import ButtonForm from '../components/ButtonForm';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
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
          <Input>Username</Input>
        </View>
        <View>
          <Input>Password</Input>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.textNavigate}>Forgot Password</Text>
        </TouchableOpacity>
        <ButtonForm>Login</ButtonForm>
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
