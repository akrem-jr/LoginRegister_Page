import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const router = [
  {
    path: '/Register',
    element: <div> <Register/> </div>
  },
  {
    path: '/Login',
    element: <div><Login/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  }
];

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {router.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
