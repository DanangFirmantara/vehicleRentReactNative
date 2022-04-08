import React, { useEffect } from 'react';
import reduxStore from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import Main from './src/routes';

const { store, persistor } = reduxStore();

PushNotification.createChannel({
   channelId: 'profile-notif',
   channelName: 'for test notification',
   vibrate: true,
   playSound: true,
   soundName: 'default',
});

const App = () => {
   const getToken = async () => {
      const token = await messaging().getToken();
      console.log(token);
   };
   useEffect(() => {
      getToken();
   }, []);
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor} loading={null}>
            <Main />
         </PersistGate>
      </Provider>
   );
};

export default App;
