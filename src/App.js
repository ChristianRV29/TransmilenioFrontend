import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';

import Home from './components/Home';

import CreateZone from './components/CreateZone';
import EditZone from './components/EditZone';
import ZoneList from './components/ZoneList';

import CreateStation from './components/CreateStation';
import EditStation from './components/EditStation';
import StationList from './components/StationList';
import AddRoute from './components/AddRouteToStation';

import CreateRoute from './components/CreateRoute';
import EditRoute from './components/EditRoute';
import RouteList from './components/RouteList';
import AddStation from './components/AddStationToRoute';

import PokemonApi from './components/PokemonApi';

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/crearZona" component={CreateZone} />
      <Route path="/listarZonas" component={ZoneList} />
      <Route path="/editarZona/:id" component={EditZone}/>

      <Route path="/crearEstacion" component={CreateStation} />
      <Route path="/listarEstaciones" component={StationList} />
      <Route path="/editarEstacion/:id" component={EditStation}/>
      <Route path="/agregarRuta/:id" component={AddRoute} />

      <Route path="/crearRuta" component={CreateRoute} />
      <Route path="/listarRutas" component={RouteList} />
      <Route path="/editarRuta/:id" component={EditRoute}/> 
      <Route path="/agregarEstacion:/id" component={AddStation} />

      <Route path="/api/pokemones" component={PokemonApi} />

    </Router>
  );
}

export default App;
