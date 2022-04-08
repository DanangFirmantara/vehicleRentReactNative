import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Chat from '../../screens/Chat';
import History from '../../screens/History';

const ChatStack = createMaterialTopTabNavigator();

const StackChat = () => {
   return (
      <ChatStack.Navigator>
         <ChatStack.Screen name="Chat" component={Chat} />
         <ChatStack.Screen name="HistoryOrder" component={History} />
      </ChatStack.Navigator>
   );
};

export default StackChat;
