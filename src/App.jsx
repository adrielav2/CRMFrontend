import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Evaluacion } from "./components/Evaluaciones/Evaluacion";
import { CrearEvaluacion } from "./components/Evaluaciones/CrearEvaluacion";
import { DetalleEvaluacion } from "./components/Evaluaciones/DetalleEvaluacion";
import { ModificarEvaluacion } from "./components/Evaluaciones/ModificarEvaluacion";
export function App() {
    return (
    <Router>
        <div className="App">
            
            <Routes>
            {/*<Evaluacion /><Route exact path= "/" element = {<Login/>} />
            <Route exact path= "/recuperar" element = {<Recuperar/>} /> */}
            <Route exact path= "/" element = {<Evaluacion/>} />
            <Route exact path= "/crearEvaluacion" element = {<CrearEvaluacion/>} />
            <Route exact path= "/detalleEvaluacion" element = {<DetalleEvaluacion/>} />
            
            <Route exact path= "/modficarEvaluacion" element = {<ModificarEvaluacion/>} />
            </Routes>
        </div>
    </Router>
    )
    
}