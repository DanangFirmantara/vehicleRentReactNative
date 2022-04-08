import React from 'react';
import HomeAdmin from '../../screens/HomeAdmin';
import AddNewItem from '../../screens/AddNewItem';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackHome = createNativeStackNavigator();

const HomeStack = () => {
   return (
      <StackHome.Navigator>
         <StackHome.Screen
            name="HomeAdmin"
            component={HomeAdmin}
            options={{
               headerShown: false,
            }}
         />
         <StackHome.Screen name="AddNewItem" component={AddNewItem} />
      </StackHome.Navigator>
   );
};

export default HomeStack;
