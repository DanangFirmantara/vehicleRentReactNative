import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Chat from '../../screens/Chat';
import History from '../../screens/History';

const ChatStack = createMaterialTopTabNavigator();

const StackChat = () => {
   return (
      <ChatStack.Navigator
         screenOptions={{
            tabBarStyle: {
               backgroundColor: 'rgba(255, 255, 255, 1)',
               borderBottomRightRadius: 20,
               borderBottomLeftRadius: 20,
               shadowColor: 'rgba(0, 0, 0, 0.3)',
            },
         }}>
         <ChatStack.Screen name="Chat" component={Chat} />
         <ChatStack.Screen name="HistoryOrder" component={History} />
      </ChatStack.Navigator>
   );
};

export default StackChat;
