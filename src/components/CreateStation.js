import React, { Component } from 'react'
import axios from 'axios'

export default class CreateStation extends Component {

    state = {
        name: '',
        address: '',
        zoneSelected: '',
        routeSelected: '',
        zones: [],
        routes: [],
        _id: ''
    }

    async componentDidMount() {

        const resp = await axios.get('http://localhost:8080/api/zonas/mostrarZonas');
        const resp2 = await axios.get('http://localhost:8080/api/rutas/mostrarRutas');

        this.setState({
            zones: resp.data,
            zoneSelected: resp.data[0]._id,
            routes: resp2.data,
            routeSelected: resp2.data[0]._id,
        });

    }

    onInputChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = async (e) => {

        e.preventDefault();

        await axios.post('http://localhost:8080/api/estaciones/crearEstacion', {
            name: this.state.name,
            address: this.state.address,
            zone: this.state.zoneSelected,
            routes: {
                _id: this.state.route,                
            }
        });

        window.location.href = '/';
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="row">
                    <div className="col-md">
                        <div className="card card-body">
                            <h4 align="center">Crear estación</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Nombre ruta"
                                        name="name"
                                        onChange={this.onInputChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label>Dirección</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Dirección ruta"
                                        name="address"
                                        required
                                        onChange={this.onInputChange} />   
                                </div>
                                <div className="form-group">
                                    <label>Zona a la que pertenece</label>
                                    <select
                                        className="form-control"
                                        value={this.state.zoneSelected}
                                        onChange={this.onInputChange}
                                        name="zoneSelected"
                                        required>
                                        {
                                            this.state.zones.map((zone) => (
                                                <option key={zone._id} value={zone._id} >
                                                    {zone.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>                            
                                <div className="form-group">
                                    <label>Ruta que pasa por la estación</label>
                                    <select
                                        className="form-control"
                                        value={this.state.routeSelected}
                                        onChange={this.onInputChange}
                                        name="routeSelected"
                                        required>
                                        {
                                            this.state.routes.map((route) => (
                                                <option key={route._id} value={route._id} >
                                                    {route.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Crear
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
