import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import AuthLayout from './components/AuthLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>HOLA 1</h1>}/>
          <Route path="/login" element={
              <AuthLayout authentication={false}>
                <Login />
              </AuthLayout>
            }
          />

          <Route path="/register"
            element={
              <AuthLayout authentication={false}>
                <Register />
              </AuthLayout>
            }
          />

          <Route path="/dashboard/*"
            element={
              <AuthLayout authentication={true}>
                <Dashboard />
              </AuthLayout>
            }
          >
            <Route index element={<>HOLAAAAAAAA index</>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);