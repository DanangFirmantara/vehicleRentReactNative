import React from 'react';
import Search from '../../screens/Search';
import Filter from '../../screens/Filter';
import Detail from '../../screens/Detail';
import OrderDetail from '../../screens/OrderDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BackItem from '../../components/BackItem';
import Reservation from '../../screens/Reservation';
import Link from '../../components/Link';
import FinishPayment from '../../screens/FinishPayment';
import PaymentSuccess from '../../screens/PaymentSuccess';
import UpdatedVehicle from '../../screens/UpdatedVehicle';

const StackSearch = createNativeStackNavigator();
const SearchStack = () => {
   return (
      <StackSearch.Navigator>
         <StackSearch.Screen
            options={{ headerShown: false }}
            name="Search"
            component={Search}
         />
         <StackSearch.Screen
            name="Filter"
            component={Filter}
            options={{
               header: () => <BackItem>Filter</BackItem>,
            }}
         />
         <StackSearch.Screen
            name="Detail"
            component={Detail}
            options={{
               headerShown: false,
            }}
         />
         <StackSearch.Screen
            name="UpdatedVehicle"
            component={UpdatedVehicle}
            options={{
               headerShown: false,
            }}
         />
         <StackSearch.Screen
            name="Reservation"
            component={Reservation}
            options={{
               header: () => <BackItem>Payment</BackItem>,
            }}
         />
         <StackSearch.Screen
            name="OrderDetail"
            component={OrderDetail}
            options={{
               header: () => <BackItem>Payment</BackItem>,
            }}
         />
         <StackSearch.Screen
            name="FinishPayment"
            component={FinishPayment}
            options={{
               header: () => <BackItem>Payment</BackItem>,
            }}
         />
         <StackSearch.Screen
            name="PaymentSuccess"
            component={PaymentSuccess}
            options={{
               header: () => <Link to={'HistoryOrder'}>See History</Link>,
            }}
         />
      </StackSearch.Navigator>
   );
};

export default SearchStack;
