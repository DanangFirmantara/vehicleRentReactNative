import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import SendCode from '../../screens/SendCode';
import ResetPassword from '../../screens/ResetPassword';
import { NavigationContainer } from '@react-navigation/native';

const StackAuth = createNativeStackNavigator();
const Auth = () => {
   return (
      <NavigationContainer>
         <StackAuth.Navigator>
            <StackAuth.Screen
               name="Login"
               component={Login}
               options={{ headerShown: false }}
            />
            <StackAuth.Screen
               options={{
                  headerTitle: 'Sign Up',
               }}
               name="SignUp"
               component={SignUp}
            />
            <StackAuth.Screen
               options={{
                  headerTitle: 'Send Code',
               }}
               name="SendCode"
               component={SendCode}
            />
            <StackAuth.Screen
               options={{
                  headerTitle: 'Reset Password',
               }}
               name="ResetPassword"
               component={ResetPassword}
            />
         </StackAuth.Navigator>
      </NavigationContainer>
   );
};

export default Auth;
