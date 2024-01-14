import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Principal from './Principal';
import SobreMi from './sobre-mi';
import Conclusion from './conclusion';
import Reflexion from './reflexion';
import Bibliografia from './bibliografia';
import TrabajoSemana from './trabajos/[week]';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Principal" element={<Principal />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/trabajos/:week" element={<TrabajoSemana />} />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="/reflexion" element={<Reflexion />} />
        <Route path="/bibliografia" element={<Bibliografia />} />
        
        {/* Más rutas aquí si es necesario */}
      </Routes>
    </div>
  );
}

export default App;