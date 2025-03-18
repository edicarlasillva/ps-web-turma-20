import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import tasksReducer from './slices/tasksSlice'
import repositoriesReducer from './slices/repositoriesSlice'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  repositories: repositoriesReducer
  // outras fatias
})

export const persitedReducer = persistReducer({
  key: 'tasks',
  storage
}, rootReducer)