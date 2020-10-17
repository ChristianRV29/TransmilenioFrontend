import React, { Component } from 'react'
import axios from 'axios'

export default class CreateRoute extends Component {

    state= {
        name: '',
        stations: [],
        stationSelected: '',
        _id: ''

    }

    onInputChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async componentDidMount () {

        const res = await axios.get('http://localhost:8080/api/estaciones/mostrarEstaciones');

        this.setState({
            stations: res.data,
            stationSelected: res.data[0]._id
        });    
    }

    onSubmit = async (e) => {

        e.preventDefault();

        await axios.post('http://localhost:8080/api/rutas/crearRuta', {
            name: this.state.name,                        
            stations: {
                _id: this.state.stationSelected,
            }
        });

        window.location.href = '/listarRutas';
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
            <div className="row">
                <div className="col-md">
                    <div className="card card-body">
                        <h4 align="center">Crear ruta</h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Nombre de la ruta"
                                    name="name"
                                    onChange={this.onInputChange}
                                    required />
                            </div>                                     
                            <div className="form-group">
                                <label>Estaciones por las que pasa la ruta</label>
                                <select
                                    className="form-control"
                                    value={this.state.stationSelected}
                                    onChange={this.onInputChange}
                                    name="stationSelected"
                                    required>
                                    {
                                        this.state.stations.map((station) => (
                                            <option key={station._id} value={station._id} >
                                                {station.name}
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
