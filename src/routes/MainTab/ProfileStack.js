import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Profile from '../../screens/Profile';
import YourFavorite from '../../screens/YourFavorite';
import FAQ from '../../screens/FAQ';
import Help from '../../screens/Help';
import UpdateProfile from '../../screens/UpdateProfile';
const StackProfile = createNativeStackNavigator();
const ProfileStack = () => {
   return (
      <StackProfile.Navigator>
         <StackProfile.Screen name="Profile" component={Profile} />
         <StackProfile.Screen name="YourFavorite" component={YourFavorite} />
         <StackProfile.Screen name="FAQ" component={FAQ} />
         <StackProfile.Screen name="Help" component={Help} />
         <StackProfile.Screen name="UpdateProfile" component={UpdateProfile} />
      </StackProfile.Navigator>
   );
};

export default ProfileStack;
