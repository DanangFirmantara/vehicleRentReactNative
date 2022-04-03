import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import imgBackground from '../assets/image/reset-password.png';
import Input from '../components/Input';
import ButtonForm from '../components/ButtonForm';

const ResetPassword = () => {
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
            <Text style={styles.text}>
               Enter your email to get reset password code
            </Text>
            <View>
               <Input>Enter your email address</Input>
            </View>
            <ButtonForm>Send Code</ButtonForm>
            <ButtonForm color="white">Resend Code</ButtonForm>
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
   },
   gap: {
      flex: 1,
   },
});

export default ResetPassword;
