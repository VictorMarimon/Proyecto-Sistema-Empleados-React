import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function EditarEmpleados() {
    const navegacion = useNavigate();
    const { id } = useParams();
    const urlBase = 'http://localhost:8090/app/empleados';

    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: ""
    });

    useEffect(() => {
        cargarEmpleado();
    }, []);

    const cargarEmpleado = async () => {
        const empleadoObtenido = await axios.get(`${urlBase}/${id}`);
        setEmpleado(empleadoObtenido.data);
    };

    const onInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBase}/${id}`, empleado);
        navegacion('/');
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h4 className="mb-0">Editar Empleado</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" name="nombre" required value={empleado.nombre} onChange={onInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="departamento" className="form-label fw-bold">Departamento</label>
                                    <input type="text" className="form-control" id="departamento" name="departamento" required value={empleado.departamento} onChange={onInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sueldo" className="form-label fw-bold">Salario</label>
                                    <input type="number" step="any" className="form-control" id="sueldo" name="sueldo" required value={empleado.sueldo} onChange={onInputChange} />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-warning btn-lg me-2">
                                        <i className="bi bi-pencil-square"></i> Editar
                                    </button>
                                    <Link to="/" className="btn btn-secondary btn-lg">
                                        <i className="bi bi-arrow-left"></i> Regresar
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
