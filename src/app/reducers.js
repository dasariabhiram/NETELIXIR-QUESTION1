import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';

const rootReducer = combineReducers({
  data: dataReducer
});

export default rootReducer;