import React, { Component } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';


export default class ZoneList extends Component {

    state = {
        zones: []
    }

    async componentDidMount() {

        await this.getZones();
    }

    async getZones() {

        const resp = await axios.get('http://localhost:8080/api/zonas/mostrarZonas');

        this.setState({
            zones: resp.data
        });
    }

    deleteZone = async (id) => {

        await axios.delete(`http://localhost:8080/api/zonas/eliminarZona/${id}`);
        this.getZones();

    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.zones.map((zone) => (
                            <div className="col-md-4 p-2" key={zone._id}>
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h5>{zone.name}</h5>
                                        <Link className="btn btn-secondary" to={`/editarZona/${zone._id}`}>
                                            Editar zona
                                    </Link>
                                    </div>
                                    <div className="card-body">
                                        <p>Descripción: {zone.description}</p>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.deleteZone(zone._id)}>
                                            Eliminar zona
                                    </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
