import React, { Component } from 'react'

import axios from 'axios'

export default class EditRoute extends Component {

    state = {
        name: ''
    }

    onInputChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = async (e) => {

        const id = this.props.match.params.id;

        await axios.put(`http://localhost:8080/api/rutas/modificarRuta/${id}`, {
            name: this.state.name,            
        }).then((res) => {
            return res.data;
        });       
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Editar ruta</h4>
                    <div className="form-group">
                        <input type="text"
                            className="from-control"
                            placeholder="Nombre de la ruta"
                            name="name"
                            onChange={this.onInputChange}
                            required />
                    </div>                  
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Editar ruta
                        </button>
                    </form>

                </div>
            </div>
        )
    }
}
