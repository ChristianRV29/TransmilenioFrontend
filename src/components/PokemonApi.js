import React, { Component } from 'react'

import axios from 'axios'

export default class PokemonApi extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            img: '#',
        }
    }

    loadPokemons = async (namePokemon) => {

        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);    
                

        if (resp) {

            this.setState({
                img: resp.data.sprites.front_default
            })         
        }

        else {
            console.log('No existe el pokemon');
        }

    }

    handleName = event => {
        this.setState({
            name: event.target.value,
        });
    }

    handleSubmit = event => {

        var namePokemon = this.state.name;

        this.loadPokemons(namePokemon);

        this.setState({
            name: ''
        })

        event.preventDefault();

    }

    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header">

                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <label> Ingresa el nombre del pokemon </label>
                            <br />
                            <input
                                type="text"
                                placeholder="Nombre del pokemon"
                                value={this.state.name}
                                onChange={this.handleName} />
                            <br /><br />
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </form>
                        <img className="card-img-top" src={this.state.img} alt="pokemon.png" />                        
                    </div>
                    <div className="card-footer text-muted">
                        <label>Pokemon API - Group 8 Christian/Laura</label>
                    </div>
                </div>
            </div>
        )
    }
}
