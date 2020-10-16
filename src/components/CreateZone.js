import React from 'react';
import axios from 'axios'

export default class CreateZone extends React.Component {

    state = {
        zones: [],
        name: '',
        decription: '',        
    };


    onInputChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = async (e) => {
        //e.preventDefault(); // Este metodo cancela por defecto el formulario

        await axios.post("http://localhost:8080/api/zonas/crearZona", {
            name: this.state.name,
            description: this.state.description
        }).then((resp) => {
            return resp.data;
        }).catch((err) => {
            console.log(err);
        })
    }

    
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear nueva zona</h4>
                    <div className="form-group">
                        <input type="text"
                            className="from-control"
                            placeholder="Nombre de la estación"
                            name="name"
                            onChange={this.onInputChange}
                            required />                        
                    </div>
                    <div className="form-group">
                        <textarea name="description"
                            className="form-control"
                            placeholder="Descripción de la estación"
                            onChange={this.onInputChange}
                            required />
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Crear zona
                        </button>
                    </form>

                </div>
            </div>
        );
    }
}



