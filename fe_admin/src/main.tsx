import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MuiProvider from './theme/MuiProvider.tsx'
import { CssBaseline } from '@mui/material'
import './styles/style.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiProvider>
        <CssBaseline />
        <App />
      </MuiProvider>
    </Provider>
  </React.StrictMode>,
)
