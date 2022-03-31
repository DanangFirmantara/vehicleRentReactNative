import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import imgBackground from '../assets/image/sign-up.png';
import Input from '../components/Input';
import ButtonForm from '../components/ButtonForm';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
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
          <Input>Email</Input>
        </View>
        <View>
          <Input>Mobile Phone</Input>
        </View>
        <View>
          <Input>Password</Input>
        </View>
        <ButtonForm>Sign Up</ButtonForm>
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
