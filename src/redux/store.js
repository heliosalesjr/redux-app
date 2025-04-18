// src/redux/store.js
import { createStore } from 'redux';
import { peopleReducer } from './peopleSlice';

export const store = createStore(peopleReducer);
