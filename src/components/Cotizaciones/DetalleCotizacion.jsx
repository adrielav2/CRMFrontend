import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import styled  from 'styled-components';
import './DetalleCotizacion.css';

import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';

export const DetalleCotizacion = () => {
    let navigate = useNavigate();
    const gotoModificarCotizacion = () => { navigate('/modficarCotizacion'); }


    const [idCotizacion, setidCotizacion] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechaEjecucion, setFechaEjecucion] = useState('');
    const [tipoCotizacion, setTipoCotizacion] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [estado, setEstado] = useState('');
    const [costo, setCosto] = useState('');
    const [cedula, setCedula] = useState('');
    const [nombreCliente, setNombreCliente] = useState('');
    const [nombreProyecto, setNombreProyecto] = useState('');
    //const [archivosAdjuntos, setArchivosAdjuntos] = useState([]);

    const archivosAdjuntos = [
        { nombre: 'Carnet e Infrome de matricula.pdf', url: 'CRMFrontend\public\Carnet e Infrome de matricula.pdf' },
        { nombre: 'logo192.png', url: 'CRMFrontend/public/logo192.png' },
      ];
    
    const handleSearch = async () => {
        //Buscamos la informacion del backend
        
        setidCotizacion('E1231')
        setNombre('Cotizacion para el Ministerio de salud')
        setDescripcion('Cotizacion de accesibilidad')
        setFechaEjecucion('20/09/2023')
        setTipoCotizacion('Automatica')
        
        setEstado('En proceso')
        setCosto(230000)
        setCedula('123129131')
        setNombreCliente('Ministerio de hacienda')
        setNombreProyecto('')// Si es nulo no se mete 
    };


    const Title = styled.h1`
    font-size: 24px;
    color: #000000;
    margin-bottom: 80px;
    margin-top: 25px;
    `;

    React.useEffect(() => {
        handleSearch()
    }, []);
    return (
        
        <Fragment>
        <div className="container"> 
        <Navbar />
            <div>
                    <div>
                        <Title>{nombre}</Title>
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <label  for="idColabel" class="form-label">ID Cotización:</label>
                        <label  style={{ marginLeft: '130px' }}for="idCotizacion" class="form-label">{idCotizacion}</label>
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <label for="namelabel" class="form-label">Nombre:</label>
                        <label style={{ marginLeft: '180px' }} for="nameCotizacion" class="form-label">{nombre}</label>
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <label for="descripcionLabel" class="form-label">Descripción:</label>
                        <label style={{ marginLeft: '150px' }} for="descripcion" class="form-label">{descripcion}</label>
                    </div>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <label for="fecha" class="form-label">Fecha de ejecución:</label>
                        <label style={{ marginLeft: '90px' }}  for="fecha" class="form-label">{fechaEjecucion}</label>
                    </div>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <label for="idCoLave" class="form-label">Tipo de cotización:</label>
                        <label style={{ marginLeft: '90px' }} for="idCotizacion" class="form-label">{tipoCotizacion}</label>
                    </div>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <label for="idCoLave" class="form-label">Documentos adjuntos: </label>
                        <ul>
                            {archivosAdjuntos.map((archivo, index) => (
                                <li key={index}>
                                    <a href={archivo.url} download>
                                        {archivo.nombre}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <label for="idCoLave" class="form-label">Estado:</label>
                        <label style={{ marginLeft: '190px' }} for="idCotizacion" class="form-label">{estado}</label>
                    </div>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <label for="idCoLave" class="form-label">Costo:</label>
                        <label style={{ marginLeft: '200px' }} for="idCotizacion" class="form-label">{costo}</label>
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <label for="idCoLave" class="form-label">Cédula Juridica: </label>
                        <label style={{ marginLeft: '100px' }} for="idCotizacion" class="form-label">{cedula}</label>
                    </div>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <label for="idCoLave" class="form-label">Nombre del cliente o entidad:</label>
                        <label for="idCotizacion" class="form-label">{nombreCliente}</label>
                    </div>
                    
                    {nombreProyecto !== '' && (
                        <div style={{ marginBottom: '30px' }}>
                            <label for="idCoLave" class="form-label">Proyecto asociado:</label>
                            <label for="idCotizacion" class="form-label">{nombreProyecto}</label>
                        </div>
                        )}
                        <div style={{ marginTop: '100px', display: 'flex' }}>
                            <button type="submit" className="button2" onClick={gotoModificarCotizacion}>
                                <BsFillPencilFill style={{
                                fontSize: '25px',
                                marginRight: '20px',
                                marginLeft: '20px',
                                color: '#12959E' // Tamaño del icono
                                }} /> Modificar cotización
                            </button>
                            <button type="submit" className="button2">
                                <RiDeleteBinLine style={{
                                fontSize: '25px',
                                marginRight: '20px',
                                marginLeft: '20px',
                                color: '#12959E' // Tamaño del icono
                                }} /> Eliminar cotización
                            </button>
                        </div>

                     </div>
                     
                     
        </div>

    </Fragment>
    );
};
