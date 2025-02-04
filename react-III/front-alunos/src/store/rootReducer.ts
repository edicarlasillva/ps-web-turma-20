import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

import todosReducer from './slices/todoSlices'
import assessmentsReducer from './slices/assessmentsSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
  assessments: assessmentsReducer
})

export const persistedReducer = persistReducer({
  key: 'students',
  storage
}, rootReducer)
