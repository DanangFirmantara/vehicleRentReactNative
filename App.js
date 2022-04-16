import React, { useEffect } from 'react';
import reduxStore from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import messaging from '@react-native-firebase/messaging';
import Main from './src/routes';
import './src/Notifications';
import SplashScreen from 'react-native-splash-screen';

const { store, persistor } = reduxStore();

const App = () => {
   const getToken = async () => {
      const token = await messaging().getToken();
      console.log(token);
   };
   useEffect(() => {
      getToken();
      SplashScreen.hide();
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
