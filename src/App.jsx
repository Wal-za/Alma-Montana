// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './Components/landing';  
import RouteDetails from './Components/ruta'; 
import Whatsapp from './Components/whatsapp'; 

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de bienvenida */}
        <Route path="/" element={<><Landing /><Whatsapp phoneNumber="+573194969983" /></>} />              
        {/* Ruta para los detalles de la ruta */}
        <Route path="/route/:id" element={<RouteDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
