import React, { Component } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';

export default class StationList extends Component {

    state = {
        stations: [],
        zone: '',
    }

    async componentDidMount() {

        this.getStations();

    }

    async getStations() {

        const resp = await axios('http://localhost:8080/api/estaciones/mostrarEstaciones');

        this.setState({
            stations: resp.data
        });
    }

    deleteStation = async (id) => {

        await axios.delete(`http://localhost:8080/api/estaciones/eliminarEstacion/${id}`);

        this.getStations();

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.stations.map((station) => (
                            <div className="col-md-4 p-2" key={station._id}>
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h5>{station.name}</h5>
                                        <Link className="btn btn-secondary" to={`/editarEstacion/${station._id}`}>
                                            Editar estación
                                    </Link>
                                    </div>
                                    <div className="card-body">
                                        <p>Dirección: {station.address}</p>
                                        <p>Zona: {station.zone.name}</p>
                                        <p>Rutas: {station.routes.map((route) => (
                                            <h6>{route}</h6>
                                        ))}
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.deleteStation(station._id)}>
                                            Eliminar estación
                                    </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
