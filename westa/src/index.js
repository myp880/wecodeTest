import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

import "./styles/reset.css"
import "./styles/common.css"

// import Login from './pages/Login/Login';
// import Main from './pages/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Login />);
// root.render(<Main />);
root.render(<Router />);

