import { configureStore } from '@reduxjs/toolkit'

import { persistStore } from 'redux-persist'
import { persitedReducer } from './rootReducer'

export const store = configureStore({
  reducer: persitedReducer,
  middleware: (defaultMiddleware) => defaultMiddleware({
    serializableCheck: false
  })
})

export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch