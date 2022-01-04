import { combineReducers } from 'redux';
import vehicleReducer from './Vehicles';
import makeReducer from './Makes';
import modelsReducer from './Models';

const RootReducer = combineReducers({
  vehicle: vehicleReducer,
  make: makeReducer,
  models: modelsReducer,
});

export default RootReducer;
