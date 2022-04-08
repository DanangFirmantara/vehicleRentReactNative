import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
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
         <TabMain.Navigator>
            <TabMain.Screen
               name="HomeStack"
               component={HomeStack}
               options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({
                     focused,
                     color = 'rgba(255, 205, 97, 1)',
                     size,
                  }) => <Icon name="home" size={size} color={color} />,
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
                  }) => <Icon name="search" size={size} color={color} />,
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
                     <IonIcon name="ios-chatbubble" size={size} color={color} />
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
                  }) => <Icon name="user" size={size} color={color} />,
               }}
            />
         </TabMain.Navigator>
      </NavigationContainer>
   );
};

export default MainTab;
