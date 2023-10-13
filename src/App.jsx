import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Evaluacion } from "./components/Evaluaciones/Evaluacion";
import { CrearEvaluacion } from "./components/Evaluaciones/CrearEvaluacion";
import { DetalleEvaluacion } from "./components/Evaluaciones/DetalleEvaluacion";
import { ModificarEvaluacion } from "./components/Evaluaciones/ModificarEvaluacion";

import { Capacitacion } from "./components/Capacitaciones/Capacitacion";
import { CrearCapacitacion } from "./components/Capacitaciones/CrearCapacitacion";
import { DetalleCapacitacion } from "./components/Capacitaciones/DetalleCapacitacion";
import { ModificarCapacitacion } from "./components/Capacitaciones/ModificarCapacitacion";

import { Cotizacion } from "./components/Cotizaciones/Cotizacion";
import { CrearCotizacion} from "./components/Cotizaciones/CrearCotizacion";
import { DetalleCotizacion } from "./components/Cotizaciones/DetalleCotizacion";
import { ModificarCotizacion } from "./components/Cotizaciones/ModificarCotizacion";

import { Clientes } from "./components/Clientes/Clientes";
import { CrearCliente } from "./components/Clientes/CrearCliente";
import { DetalleCliente } from "./components/Clientes/DetalleCliente";
import { ModificarCliente } from "./components/Clientes/ModificarCliente";

import { Funcionarios } from "./components/Funcionarios/Funcionarios";
import { CrearFuncionarios } from "./components/Funcionarios/CrearFuncionarios";
import { DetalleFuncionario } from "./components/Funcionarios/DetalleFuncionario";
import { ModificarFuncionario } from "./components/Funcionarios/ModificarFuncionario";
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
            <Route exact path= "/modificarEvaluacion" element = {<ModificarEvaluacion/>} />

            <Route exact path= "/capacitacion" element = {<Capacitacion/>} />
            <Route exact path= "/crearCapacitacion" element = {<CrearCapacitacion/>} />
            <Route exact path= "/detalleCapacitacion" element = {<DetalleCapacitacion/>} />
            <Route exact path= "/modificarCapacitacion" element = {<ModificarCapacitacion/>} />

            <Route exact path= "/cotizacion" element = {<Cotizacion/>} />
            <Route exact path= "/crearCotizacion" element = {<CrearCotizacion/>} />
            <Route exact path= "/detalleCotizacion" element = {<DetalleCotizacion/>} />
            <Route exact path= "/modificarCotizacion" element = {<ModificarCotizacion/>} />
            
            <Route exact path= "/clientes" element = {<Clientes/>} />
            <Route exact path= "/crearClientes" element = {<CrearCliente/>} />
            <Route exact path= "/detalleClientes" element = {<DetalleCliente/>} />
            <Route exact path= "/modificarCliente" element = {<ModificarCliente/>} />

            <Route exact path= "/funcionarios" element = {<Funcionarios/>} />
            <Route exact path= "/crearFuncionarios" element = {<CrearFuncionarios/>} />
            <Route exact path= "/detalleFuncionario" element = {<DetalleFuncionario/>} />
            <Route exact path= "/modificarFuncionario" element = {<ModificarFuncionario/>} />
            </Routes>
        </div>
    </Router>
    )
    
}