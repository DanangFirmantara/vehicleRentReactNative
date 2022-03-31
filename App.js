// import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          options={{
            headerTitle: 'Sign Up',
          }}
          name="Sign-Up"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Reset Password',
          }}
          name="Reset-Password"
          component={ResetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
