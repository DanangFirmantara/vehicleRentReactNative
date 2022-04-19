import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Box } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import SearchStack from './SearchStack';
import StackChat from './StackChat';

const TabMain = createBottomTabNavigator();

const MainTab = () => {
   return (
      <NavigationContainer>
         <TabMain.Navigator
            screenOptions={{
               tabBarStyle: {
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  marginHorizontal: 20,
                  marginBottom: 10,
                  borderRadius: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.3)',
               },
            }}>
            <TabMain.Screen
               name="HomeStack"
               component={HomeStack}
               options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused, size }) => (
                     <Box
                        size={size * 1.4}
                        borderRadius={(size * 1.4) / 2}
                        bg={focused ? 'pallet.1' : 'pallet.2'}
                        alignItems={'center'}
                        justifyContent={'center'}>
                        <Icon
                           name="home"
                           size={size}
                           color={focused ? 'rgb(96, 54, 1)' : 'rgb(96, 54, 1)'}
                        />
                     </Box>
                  ),
                  headerShown: false,
               }}
            />
            <TabMain.Screen
               name="SearchStack"
               component={SearchStack}
               options={{
                  headerShown: false,
                  tabBarShowLabel: false,
                  tabBarIcon: ({
                     focused,
                     color = 'rgba(255, 205, 97, 1)',
                     size,
                  }) => (
                     <Box
                        size={size * 1.4}
                        borderRadius={(size * 1.4) / 2}
                        bg={focused ? 'pallet.1' : 'pallet.2'}
                        alignItems={'center'}
                        justifyContent={'center'}>
                        <Icon
                           name="search"
                           size={size}
                           color={focused ? 'rgb(96, 54, 1)' : 'rgb(96, 54, 1)'}
                        />
                     </Box>
                  ),
               }}
            />
            <TabMain.Screen
               name="StackChat"
               component={StackChat}
               options={{
                  headerShown: false,
                  tabBarShowLabel: false,
                  tabBarIcon: ({
                     focused,
                     color = 'rgba(255, 205, 97, 1)',
                     size,
                  }) => (
                     <Box
                        size={size * 1.4}
                        borderRadius={(size * 1.4) / 2}
                        bg={focused ? 'pallet.1' : 'pallet.2'}
                        alignItems={'center'}
                        justifyContent={'center'}>
                        <IonIcon
                           name="ios-chatbubble"
                           size={size}
                           color={focused ? 'rgb(96, 54, 1)' : 'rgb(96, 54, 1)'}
                        />
                     </Box>
                  ),
               }}
            />
            <TabMain.Screen
               name="ProfileStack"
               component={ProfileStack}
               options={{
                  headerShown: false,
                  tabBarShowLabel: false,
                  tabBarIcon: ({
                     focused,
                     color = 'rgba(255, 205, 97, 1)',
                     size,
                  }) => (
                     <Box
                        size={size * 1.4}
                        borderRadius={(size * 1.4) / 2}
                        bg={focused ? 'pallet.1' : 'pallet.2'}
                        alignItems={'center'}
                        justifyContent={'center'}>
                        <Icon
                           name="user"
                           size={size}
                           color={focused ? 'rgb(96, 54, 1)' : 'rgb(96, 54, 1)'}
                        />
                     </Box>
                  ),
               }}
            />
         </TabMain.Navigator>
      </NavigationContainer>
   );
};

export default MainTab;
