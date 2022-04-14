import { combineReducers } from 'redux';
import auth from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import vehicle from './vehicle';
import user from './user';
import reservation from './reservation';
import payment from './payment';
import history from './history';
import category from './category';

const persistAuth = {
   key: 'auth',
   storage: AsyncStorage,
};
const persistVehicle = {
   key: 'vehicle',
   storage: AsyncStorage,
};

const persistUser = {
   key: 'user',
   storage: AsyncStorage,
};

const persistReservation = {
   key: 'reservation',
   storage: AsyncStorage,
};

const persistPayment = {
   key: 'payment',
   storage: AsyncStorage,
};

const persistHistory = {
   key: 'history',
   storage: AsyncStorage,
};

const persistCategory = {
   key: 'category',
   storage: AsyncStorage,
};

const rootReducers = combineReducers({
   auth: persistReducer(persistAuth, auth),
   vehicle: persistReducer(persistVehicle, vehicle),
   user: persistReducer(persistUser, user),
   reservation: persistReducer(persistReservation, reservation),
   payment: persistReducer(persistPayment, payment),
   history: persistReducer(persistHistory, history),
   category: persistReducer(persistCategory, category),
});

export default rootReducers;
