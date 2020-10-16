import React, { Component } from 'react'
import axios from 'axios'

export default class EditZone extends Component {

    state = {
        name: '',
        description: '',        
    };
    
    onInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = async (e) => {

        //e.preventDefault();

        const id = this.props.match.params.id;

        const respuesta = await axios.put(`http://localhost:8080/api/zonas/actualizarZona/${id}`, {
            name: this.state.name,
            description: this.state.description
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            return null;
        });

        if (respuesta) {

        }
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Editar zona</h4>
                    <div className="form-group">
                        <input type="text"
                            className="from-control"
                            placeholder="Nombre de la zona"
                            name="name"
                            onChange={this.onInputChange}
                            required />
                    </div>
                    <div className="form-group">
                        <textarea name="description"
                            className="form-control"
                            placeholder="Descripción de la zona"
                            onChange={this.onInputChange}
                            required />
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Editar zona
                        </button>
                    </form>

                </div>
            </div>
        )
    }
}
