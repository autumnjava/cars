import { configureStore } from '@reduxjs/toolkit';
import {
  addCar,
  carsReducer,
  changeSearchTerm,
  removeCar,
} from './slices/carsSlice';
import { changeCost, changeName, formReducer } from './slices/formSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { addCar, changeCost, changeName, changeSearchTerm, removeCar, store };
