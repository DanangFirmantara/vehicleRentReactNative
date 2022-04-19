import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import Auth from './Auth';
import MainTab from './MainTab';

import { extendTheme } from 'native-base';

export const theme = extendTheme({
   colors: {
      pallet: {
         1: '#ccec44',
         2: '#1a1c1',
         3: '#4e5051',
         4: '#a4a6a7',
         5: '#fbe1c9',
         6: '#eca15d',
         7: '#8adf9f',
         8: '#ea9d91',
         9: '#1C0A00',
         10: '#361500',
         11: '#603601',
      },
   },
});

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
