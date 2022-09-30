import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './screens/home';
import Product from './screens/product';

function App() {
  return (
    <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/:value" element={ <Home /> }></Route>
        <Route path="/product/:id" element={ <Product /> }></Route>
    </Routes>
  );
}

export default App;
