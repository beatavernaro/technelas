import './App.css';
import { RouterControl } from './routes/Routes.jsx'
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RouterControl />
    </BrowserRouter>
  );
}

export default App;
