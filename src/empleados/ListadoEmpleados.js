import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {
    const urlBase = 'http://localhost:8090/app/empleados';
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        const res = await axios.get(urlBase);
        setEmpleados(res.data);
    };

    const eliminarEmpleado = async (id) => {
        await axios.delete(`${urlBase}/${id}`);
        cargarEmpleados();
    };

    return (
        <div className="container mt-4">
            <div className="text-center mb-4">
                <h3 className="fw-bold">Sistema de Recursos Humanos</h3>
                <span className="badge bg-primary fs-6">Gestión de empleados</span>
            </div>

            <div className="card shadow-lg">
                <div className="card-body">
                    <table className="table table-striped table-hover align-middle">
                        <thead className="table-dark text-center">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Empleado</th>
                                <th scope="col">Departamento</th>
                                <th scope="col">Sueldo</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empleados.map((empleado, indice) => (
                                <tr key={indice} className="text-center">
                                    <th scope="row">{empleado.id}</th>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.departamento}</td>
                                    <td>
                                        <NumericFormat
                                            value={empleado.sueldo}
                                            displayType={'text'}
                                            thousandSeparator=","
                                            prefix="$"
                                            decimalScale={2}
                                            fixedDecimalScale
                                        />
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <Link to={`/editar/${empleado.id}`} className="btn btn-warning btn-sm me-2">
                                                <i className="bi bi-pencil"></i> Editar
                                            </Link>
                                            <button className="btn btn-danger btn-sm" onClick={() => eliminarEmpleado(empleado.id)}>
                                                <i className="bi bi-trash"></i> Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
