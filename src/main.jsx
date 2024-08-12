import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {shoppingStore} from "./stores/shoppingStore.js"




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={shoppingStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
