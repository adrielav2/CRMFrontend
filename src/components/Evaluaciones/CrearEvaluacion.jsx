
import React, { useState, useEffect, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { FaCalendarAlt } from 'react-icons/fa';
import { Navbar } from '../Navbar/Navbar';
import './CrearEvaluacion.css';


export  const CrearEvaluacion = () => {
    const [name, setName] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [cedula, setCedula] = useState('');
    const [numeroTelefono, setNumeroTelefono] = useState('');
    const [numeroOficina, setNumeroOficina] = useState('');
    const [correo, setCorreo] = useState('');
    const [sede, setSede] = useState('');
    const [image, setImage] = useState(null);
    
    const [fechaRecordatorio, setFechaRecordatorio] = useState(new Date());
    const [inputValue, setInputValue] = useState('');
    const [fechaRecordatorioB, setFechaRecordatorioB] = useState('');
    const [estado, setEstado] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();  
        //Es para enviar informacion al backend
        
    }

    const handleEstadoChange = (event) => {
        setEstado(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleFechaRecordatorioChange = (date) => {
        setFechaRecordatorio(date);

        const month = date.getMonth() + 1; // Obtener el mes (se suma 1 ya que los meses se indexan desde 0)
        const day = date.getDate(); // Obtener el día
        const year = date.getFullYear(); // Obtener el año

        // Construir la cadena en el formato deseado (mm/dd/aaaa)
        const formattedDate = `${month}/${day}/${year}`;

        //console.log("Fecha formateada:", formattedDate, typeof(formattedDate));

        setInputValue(formattedDate);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
    const Title = styled.h1`
    font-size: 24px;
    color: #000000;
    margin-bottom: 80px;
    margin-top: 25px;
    `;
    const Button = styled.button`
    background-color: #ffffff;
    border: 1px solid #000000;
    padding: 10px 20px;
    color: #000000;
    font-size: 16px;
    cursor: pointer;
    `;
    
    return (
       
        <Fragment>
        <div className="container"> 
        <Navbar />
            <div class="row">
                    <div class="col-sm-3">
                        <Title>Crear Evaluaciones</Title>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="nameInput" class="form-label">Nombre</label>
                        <input type="text" class="form-control custom-margin-right" id="nameInput"
                         placeholder="Ingrese el nombre" value={name} onChange={handleNameChange}/>
                        
                    </div>
                    <div class="mb-3">
                        <label  style={{ marginRight: '40px' }} for="descripInput" class="form-label">Descripción</label>
                        <input type="text" class="form-control custom-margin-right" id="descripInput"
                         placeholder="Ingrese la descripcion de la evaluación" value={name} onChange={handleNameChange}/>
                        
                    </div>
                    <div class="mb-3">
                        
                        <select id="mySelect" value={estado} onChange={handleEstadoChange}>
                            <option value="">Seleccione el estado de la evaluación</option>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                        </select>
                        <select id="mySelect2" value={estado} onChange={handleEstadoChange}>
                            <option value="">Seleccione el tipo evaluación</option>
                            <option value="1">Automática Aleatoria</option>
                            <option value="2">Automática Específica</option>
                            <option value="2">Manual Específica</option>
                            <option value="2">Completa Aleatoria</option>
                        </select>
                    </div>
                        
                    <div className="mb-3">
                        <label  for="inputDate" className="form-label">
                            Seleccione la fecha de ejecución:
                        </label>
                        <label  style={{ marginRight: '40px' }} for="costInput" class="form-label">Costo:</label>
                        <input type="text" class="form-control custom-margin-right" id="costInput"
                         placeholder="Ingrese el costo de la evaluación" value={name} onChange={handleNameChange}/>
                        
                        </div>
                        <div className="mb-3">
                            <DatePicker 
                            selected={fechaRecordatorio}
                            onChange={handleFechaRecordatorioChange}
                            dateFormat="dd/MM/yyyy"
                            inline
                            showYearDropdown // Muestra un selector de años
                            showMonthDropdown // Muestra un selector de meses y años
                            >
                            </DatePicker>
                    </div>
        

                    </form>

            </div>
        </div>

    </Fragment>
     );
};