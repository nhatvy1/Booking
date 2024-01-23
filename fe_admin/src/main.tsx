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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MuiProvider>
            <CssBaseline />
            <App />
            <ToastContainer
              position='top-right'
              pauseOnFocusLoss
              pauseOnHover
              theme='light'
            />
          </MuiProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
