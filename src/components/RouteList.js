import React, { Component } from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

export default class RouteList extends Component {


    state = {
        routes: [],

    }

    async componentDidMount () {

        this.getRoutes();
    }

    async getRoutes() {

        const resp = await axios.get('http://localhost:8080/api/rutas/mostrarRutas');

        this.setState({
            routes: resp.data
        })
    }

    async deleteRoute(id) {

        await axios.delete(`http://localhost:8080/api/rutas/eliminarRuta/${id}`);
        this.getRoutes();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.routes.map((route) => (
                            <div className="col-md-4 p-2" key={route._id}>
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h5>{route.name}</h5>
                                        <Link className="btn btn-secondary" to={`/editarRuta/${route._id}`}>
                                            Editar ruta
                                    </Link>
                                    </div>
                                    <div className="card-body">                                                                                
                                        <p>Estaciones: {route.stations}</p>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.deleteRoute(route._id)}>
                                            Eliminar ruta
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
