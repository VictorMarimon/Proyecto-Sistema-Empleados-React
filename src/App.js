import React from 'react'
import ListadoEmpleados from './empleados/ListadoEmpleados';
import Navegacion from './plantilla/Navegacion.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AgregarEmpleados from './empleados/AgregarEmpleados';
import EditarEmpleados from './empleados/EditarEmpleados.js';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route exact path='/' element={<ListadoEmpleados/>}/>
          <Route exact path='/agregar' element={<AgregarEmpleados/>}/>
          <Route exact path='/editar/:id' element={<EditarEmpleados/>}/>
        </Routes> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
