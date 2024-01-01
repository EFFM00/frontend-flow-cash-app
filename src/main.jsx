import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import AuthLayout from './components/AuthLayout.jsx';
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>HOLA 1</h1>} />
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/dashboard/*" element={<p>HOLA p</p>}>
              <Route index element={<Dashboard />}/>
              <Route path="h" element={<h1>HOLAAAAAAAA index</h1>} />
            </Route>

          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);