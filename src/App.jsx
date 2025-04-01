// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './Components/landing';  
import RouteDetails from './Components/ruta'; 


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de bienvenida */}
        <Route path="/" element={<><Landing /></>} />              
        {/* Ruta para los detalles de la ruta */}
        <Route path="/route/:id" element={<RouteDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
