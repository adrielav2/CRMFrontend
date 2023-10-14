
import React, { useState, useEffect, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { Navbar } from '../Navbar/Navbar';

import { Table, columns, data, Styles } from './Tabla';  // Importa Table, columns y data desde Tabla.jsxy
import { Button } from './Tabla';  // Importa Title y Button desde Tabla.jsxy
import { Title } from './Tabla';
// const Title = styled.h1`
//   font-size: 24px;
//   color: #000000;
//   margin-bottom: 20px;
// `;

// const Button = styled.button`
//   background-color: #ffffff;
//   border: 1px solid #000000;
//   padding: 10px 20px;
//   color: #000000;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const SearchInput = styled.input`
//   padding: 10px;
//   border: 1px solid #000000;
//   border-radius: 5px;
//   margin-right: 10px;
// `;

// const SearchButton = styled.button`
//   background-color: #007bff;
//   color: #ffffff;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
// `;

export function Evaluacion(){

    const [searchTerm, setSearchTerm] = useState('');
    
    return (
       
         <Fragment>
         <div className='container'>
           <Navbar />
             <div>
               <Title>Evaluaciones</Title>
               <div>
                 <Button style={{ marginRight: '40px' }}>Crear Evaluación</Button>
                 <Button>Tipos de Evaluación</Button>
               </div>
               <div style={{ display: 'flex' }}>
               <Styles> 
                 <Table columns={columns} data={data} />
               </Styles>
             </div>
           </div>
         </div>
       </Fragment>
      );
    }
    