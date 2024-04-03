import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import authReducer from './slices/auth.slice'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import userReducer from './slices/user.slice'
import roleReducer from './slices/role.slice'

const authConfig = {
  key: 'auth',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  auth: authReducer,
})

const persistedReducer = persistReducer(authConfig, rootReducer)

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    user: userReducer,
    role: roleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
