import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';
import {NativeBaseProvider} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeAdmin from './src/screens/HomeAdmin';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import Chat from './src/screens/Chat';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AddNewItem from './src/screens/AddNewItem';
import reduxStore from './src/redux/store';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import UpdateProfile from './src/screens/UpdateProfile';
import FAQ from './src/screens/FAQ';
import Help from './src/screens/Help';
import YourFavorite from './src/screens/YourFavorite';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import History from './src/screens/History';
import Filter from './src/screens/Filter';
import Detail from './src/screens/Detail';

const StackAuth = createNativeStackNavigator();
const TabMain = createBottomTabNavigator();
const StackHome = createNativeStackNavigator();
const StackProfile = createNativeStackNavigator();
const ChatStack = createMaterialTopTabNavigator();
const StackSearch = createNativeStackNavigator();
const {store, persistor} = reduxStore();

const Auth = () => {
   return (
      <NavigationContainer>
         <StackAuth.Navigator>
            <StackAuth.Screen name="Login" component={Login} />
            <StackAuth.Screen
               options={{
                  headerTitle: 'Sign Up',
               }}
               name="SignUp"
               component={SignUp}
            />
            <StackAuth.Screen
               options={{
                  headerTitle: 'Reset Password',
               }}
               name="ResetPassword"
               component={ResetPassword}
            />
         </StackAuth.Navigator>
      </NavigationContainer>
   );
};

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

const HomeStack = () => {
   return (
      <StackHome.Navigator>
         <StackHome.Screen name="HomeAdmin" component={HomeAdmin} />
         <StackHome.Screen name="AddNewItem" component={AddNewItem} />
      </StackHome.Navigator>
   );
};

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

const StackChat = () => {
   return (
      <ChatStack.Navigator>
         <ChatStack.Screen name="Chat" component={Chat} />
         <ChatStack.Screen name="History Order" component={History} />
      </ChatStack.Navigator>
   );
};

const SearchStack = () => {
   return (
      <StackSearch.Navigator>
         <StackSearch.Screen
            options={{headerShown: false}}
            name="Search"
            component={Search}
         />
         <StackSearch.Screen name="Filter" component={Filter} />
         <StackSearch.Screen name="Detail" component={Detail} />
      </StackSearch.Navigator>
   );
};

const Main = () => {
   const auth = useSelector(state => state.auth);

   return (
      <NativeBaseProvider>
         {auth.token === null && <Auth />}
         {auth.token !== null && <MainTab />}
      </NativeBaseProvider>
   );
};

const App = () => {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor} loading={null}>
            <Main />
         </PersistGate>
      </Provider>
   );
};

export default App;
