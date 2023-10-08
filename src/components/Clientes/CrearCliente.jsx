import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import styled, { keyframes } from 'styled-components';

import './CSSClientes/Clientes.css'
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
export const CrearCliente = () => {
    let navigate = useNavigate();
    const gotoCliente = () => { navigate('/clientes'); }


    const [idevaluacion, setidEvaluacion] = useState('');
    const [fechaEjecucion, setFechaEjecucion] = useState('');
    const [estado, setEstado] = useState('');
    const [cedula, setCedula] = useState('');
    const [nombreCliente, setNombreCliente] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();  
        //Es para enviar informacion al backend
        //Lo de abajo es la notificacion de que ya se creo la evalaucion
        //Recordar en el backend poner lo de fecha de ingreso que se hace alla
        Swal.fire({
            title: 'Confirmación',
            text: 'El cliente se ha creado satisfactoriamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false, // Evita que se cierre haciendo clic fuera de la notificación
            allowEscapeKey: false,    // Evita que se cierre al presionar la tecla Escape (esc)
          }).then((result) => {
            if (result.isConfirmed) {
              // El usuario hizo clic en "OK", entonces llama a la función gotoMenu
              gotoCliente();
            }
          });
        
    }
  

    const Title = styled.h1`
    font-size: 24px;
    color: #000000;
    margin-bottom: 80px;
    margin-top: 25px;
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
                            placeholder="Ingrese el nombre" value={nombre} onChange={handleNameChange}/>
                            
                        </div>
                        <div class="mb-3">
                            <label for="nameInput" class="form-label">Cédula Juridica</label>
                            <input type="text" class="form-control custom-margin-right" id="nameInput"
                            placeholder="Ingrese la Cédula Juridica" value={cedula} onChange={handleCedulaChange}/>
                            
                        </div>
                        <div class="mb-3">
                            <label for="nameInput" class="form-label">Número de teléfono:</label>
                            <input type="text" class="form-control custom-margin-right" id="nameInput"
                            placeholder="Ingrese el número de teléfono " value={telefono} onChange={handleTelefonoChange}/>
                            
                        </div>
                        <div class="mb-3">
                            <label for="nameInput" class="form-label">Correo:</label>
                            <input type="text" class="form-control custom-margin-right" id="nameInput"
                            placeholder="Ingrese el correo electronico" value={correo} onChange={handleCorreoChange}/>
                            
                        </div>
                    
                            
                        <div className="mb-3" style={{ marginTop:  '100px' }} >
                            <button type="submit" className='button1' >
                                <AiOutlinePlusCircle style={{
                                            fontSize: '25px',  marginRight: '20px',  marginLeft: '20px'// Tamaño del icono
                                        }} /> Crear cliente
                            </button>
                        
                        </div>
        

                    </form>

            </div>
                     
                     
        </div>

    </Fragment>
    );
};
