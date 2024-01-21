import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MuiProvider from './theme/MuiProvider.tsx'
import { CssBaseline } from '@mui/material'
import './styles/style.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MuiProvider>
            <CssBaseline />
            <App />
          </MuiProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
