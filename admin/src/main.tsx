import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './css/style.css'
import './css/satoshi.css'
import 'jsvectormap/dist/css/jsvectormap.css'
import 'flatpickr/dist/flatpickr.min.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import AntdConfigProvider from './common/AntdConfig/AntdConfig'
import 'react-toastify/dist/ReactToastify.css'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AntdConfigProvider>
            <App />
          </AntdConfigProvider>
          <ToastContainer
            position='top-right'
            pauseOnFocusLoss
            pauseOnHover
            theme='light'
          />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
