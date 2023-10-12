import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiClipboard } from 'react-icons/fi';
import { Navbar } from '../../Navbar/Navbar';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import '../../Clientes/CSSClientes/Clientes.css'
export const Perfiles = () => {
    const [id, setIdPerfil] = useState(''); //FALTA AGREGAR LA TABLA DE AHI ES DONDE SE RECOGE
    const [perfiles, setPerfiles] = useState([[]]);//Meter los datos de los clientes ahi
    //Esto es para enviarlo a detalles
    const handleIdPerfilChange = (event) => {
        setIdPerfil(event.target.value);
    };
    let navigate = useNavigate();
    const gotoCrearFuncionario = () => { navigate('/crearFuncionarios'); }
    
    const Title = styled.h1`
    font-size: 24px;
    color: #000000;
    margin-bottom: 80px;
    margin-top: 25px;
    `;
    const handleSearch = async () => { 
        //Obtener infromacion existente en la base de datos
        //A esto me refiero recuperar los datos de los funcionarios
        setPerfiles([[]]);
    }; 
    const handleCrearPerfil= async (event) => {
        event.preventDefault();  
        //Es para enviar informacion al backend
        //Lo de abajo es la notificacion de que ya se creo la evalaucion
        //Recordar en el backend poner lo de fecha de ingreso que se hace alla
      	
        Swal.fire({
            title: 'Crear perfil',
            input: 'text',
            inputLabel: 'Nombre del perfil',
            inputPlaceholder: 'Ingrese el nombre del perfil',
            showDenyButton: true, // Agregar botones de confirmación y cancelación
            confirmButtonText: 'Aceptar', // Cambiar texto del botón de confirmación
            denyButtonText: 'Cancelar', // Cambiar texto del botón de cancelación
            allowOutsideClick: false, // Evitar cierre haciendo clic fuera de la notificación
            allowEscapeKey: false,
          }).then((result) => {
            if (result.isConfirmed) {
              const nombre = result.value; // Obtener el valor del input
              if (nombre !== '') {
                //Enviar al backend
                //Recuperar opcion creada
                Swal.fire('Se ingresó correctamente: ' + nombre);
              } else {
                Swal.fire('Incorrecto', 'Debe ingresar el nombre', 'error');
              }
            } else if (result.isDenied) {
              Swal.fire('Operación cancelada');
            }
          })
    };

    return (
        <Fragment>
         <div className="container"> 
         <Navbar />
             <div class="row">
                     <div class="col-sm-3">
                         <Title>Tipos de Perfiles</Title>
                     </div>
             </div>
             
             <div className="mb-3" style={{ marginTop: '100px', display: 'flex'}}>
                 <button  className="button3" style={{marginLeft: '-140px', height: '50px', width: '180px'}} onClick={handleCrearPerfil}>
                     <AiOutlinePlusCircle style={{
                     fontSize: '25px',
                     color: '#12959E', // Tamaño del icono
                     marginRight: '20px',
                     marginLeft: '20px',
                     }} /> 
                     <div style={{ textAlign: 'left' }}>
                        Crear<br />perfil
                    </div>
                 </button>
             </div>
             {/* Aqui ponemos la tabla de los funcionarios, falta por hacer */}
             
         </div>
 
 
        </Fragment>
     );
};