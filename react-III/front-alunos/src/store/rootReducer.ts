import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

import todosReducer from './slices/todoSlices'

const rootReducer = combineReducers({
  todos: todosReducer,
})

export const persistedReducer = persistReducer({
  key: 'students',
  storage
}, rootReducer)
