import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import Auth from './Auth';
import MainTab from './MainTab';
import { theme } from '../helpers/theme';
const Main = () => {
   const auth = useSelector((state) => state.auth);

   return (
      <NativeBaseProvider theme={theme}>
         {auth.token === null && <Auth />}
         {auth.token !== null && <MainTab />}
      </NativeBaseProvider>
   );
};

export default Main;
