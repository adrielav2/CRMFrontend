
import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Navbar } from '../Navbar/Navbar';
import styled from 'styled-components';
import './CSSClientes/Clientes.css'
import { Table, columns, data, Styles } from './TablaClientes';  // Importa Table, columns y data desde Tabla.jsxy
export const Clientes = () => {
    const [cedula, setCedula] = useState(''); //FALTA AGREGAR LA TABLA DE AHI ES DONDE SE RECOGE
    //Esto es para enviarlo a detalles
    const handleCedulaChange = (event) => {
        setCedula(event.target.value);
    };
    const [clientes, setClientes] = useState([[]]);//Meter los datos de los clientes ahi
    let navigate = useNavigate();
    const gotoCrearCliente = () => { navigate('/crearClientes'); }
    
    const Title = styled.h1`
    font-size: 24px;
    color: #000000;
    margin-bottom: 80px;
    margin-top: 25px;
    `;
    const handleSearch = async () => { 
        //Obtener infromacion existente en la base de datos
        //A esto me refiero recuperar los datos del cliente
        setClientes([[]]);
    }; 
    const data = [
        {
          cedula: 12517,
          idCliente: 1,
          nombre: 'Evaluación A',
          telefono: 'Activa',
          correo: 'prueba@gmail.com',
          detalle: 'Ver más',
        },
        {cedula: 12517,
          idCliente: 2,
          nombre: 'Evaluación B',
          telefono: 'Inactiva',
          correo: 'quePereza@gmail.com',
          detalle: 'Ver más',
        },
        {cedula: 2518,
          idCliente: 3,
          nombre: 'Evaluación C',
          telefono: 'Activa',
          correo: 'tel@gmail.com',
          detalle: 'Ver más',
        },
        {cedula: 15745,
          idCliente: 4,
          nombre: 'Evaluación D',
          telefono: 'Inactiva',
          correo: 'ahh@gmail.com',
          detalle: 'Ver más',
        },
        {cedula: 214841,
          idCliente: 5,
          nombre: 'Evaluación E',
          telefono: 'Activa',
          correo: 'ser@gmail.com',
          detalle: 'Ver más',
        },
        
      ];
      
    return (
       <Fragment>
        <div className="container"> 
        <Navbar />
            <div class="row" style={{marginTop: '30px'  }}>
                    <div class="col-sm-3">
                        <Title>Clientes</Title>
                    </div>
                     <div className="mb-3" style={{ marginTop: '0px'}}>
                        <button  className="button3" style={{marginLeft: '20px', marginTop: '-20px'  }} onClick={gotoCrearCliente}>
                            <AiOutlinePlusCircle style={{
                            fontSize: '25px',
                            color: '#12959E', // Tamaño del icono
                            marginRight: '20px',
                            marginLeft: '20px',
                            }} />Crear cliente
                        </button>
                    </div>
            <div className="mb-3" style={{ marginTop: '70px', marginLeft: '20px'}}>
                <div style={{ display: 'flex' }}>
                <Styles> 
                    <Table columns={columns} data={data} />
                </Styles>
                </div>
            </div>
            </div>
           
            {/* Aqui ponemos la tabla de los clientes, falta por hacer */}
            
        </div>


       </Fragment>
    );
};