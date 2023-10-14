import React, { useState, useEffect, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { Navbar } from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';


const Title = styled.h1`
  font-size: 24px;
  color: #000000;
  margin-bottom: 50px;
  margin-top: 25px;
`;

export function ReporteRendimiento(){
    
    return (
    <Fragment>
    <div className='container'>
        <Navbar/>
        <div class="row">
          <div class="col-sm-3">
            <Title>Reporte de Rendimiento</Title>
            </div>
          <div class="mb-3">
        </div> 
        </div>
    </div>            
    </Fragment>
    )
    
}