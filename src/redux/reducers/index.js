import { combineReducers } from 'redux';
import auth from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import vehicle from './vehicle';
import user from './user';

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

const rootReducers = combineReducers({
   auth: persistReducer(persistAuth, auth),
   vehicle: persistReducer(persistVehicle, vehicle),
   user: persistReducer(persistUser, user),
});

export default rootReducers;
