import React from 'react';
import { Link } from 'react-router-dom'


export default class Navigation extends React.Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Transmilenio</Link>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/listarZonas">Zonas</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/listarEstaciones">Estaciones</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/listarRutas">Rutas</Link>
                            </li>
                        </ul>                                                
                    </div>
                </div>
            </nav>
        );
    }
}
