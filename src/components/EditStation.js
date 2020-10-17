import React, { Component } from 'react';
import axios from 'axios'

export default class EditStation extends Component {

    state = {
        name: '',
        address: ''    
    }

    onInputChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = async (e) => {

        const id = this.props.match.params.id;

        const respuesta = await axios.put(`http://localhost:8080/api/estaciones/modificarEstacion/${id}`, {
            name: this.state.name,
            address: this.state.address
        }).then((res) => {
            return res.data;
        });

        window.location.href = '/listarEstaciones';
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Editar estación</h4>
                    <div className="form-group">
                        <input type="text"
                            className="from-control"
                            placeholder="Nombre de la estación"
                            name="name"
                            onChange={this.onInputChange}
                            required />
                    </div>
                    <div className="form-group">
                        <textarea name="address"
                            className="form-control"
                            placeholder="Dirección de la estación"
                            onChange={this.onInputChange}
                            required />
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Editar estación
                        </button>
                    </form>

                </div>
            </div>
        )
    }
}
